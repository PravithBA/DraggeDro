import React, { useRef, useState } from 'react';
type Props = React.CSSProperties & {
	children: JSX.Element[];
}
export const PannelAllowSpecified: React.FunctionComponent<Props> = (props) => {
	const { children } = props
	const componentRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null)
	const [mousePos, setMousePos] = useState<{
		[key: string]: {
			X: number,
			Y: number,
			offsetLeft: number,
			offsetRight: number,
			offsetTop: number,
			offsetBottom: number,
		}
	}>({});
	const width = props.width ? props.width : "100vw"
	const height = props.height ? props.height : "100vh"
	let left = 23
	let top = 43
	return (
		<>
			<div ref={componentRef} style={{ ...props, display: 'block', position: "relative", width, height }}>
				{children.map((child: JSX.Element, i: number) => {
					return (
						<div
							key={i}
							className=""
							draggable={child.props.draggable ? child.props.draggable : true}
							style={{ width: "fit-content", position: "absolute", top, left }}
							onMouseDown={(event: React.MouseEvent) => {
								setMousePos((mousePos) => {
									let newPos = mousePos;
									const anyEvent: any = event;
									const target: Element = anyEvent.target;
									const offsetRight = Math.floor(target.getBoundingClientRect().right - event.clientX)
									const offsetBottom = Math.floor(target.getBoundingClientRect().bottom - event.clientY)
									const offsetLeft = Math.floor(event.clientX - target.getBoundingClientRect().left)
									const offsetTop = Math.floor(event.clientY - target.getBoundingClientRect().top)
									newPos[`${i}`] = {
										X: offsetLeft,
										Y: offsetTop,
										offsetLeft,
										offsetRight,
										offsetTop,
										offsetBottom,
									};
									return newPos
								});
							}}
							onDragEnd={(event: React.DragEvent<HTMLDivElement>) => {
								const anyEvent: any = event;
								const currentMousePos = mousePos[`${i}`]
								const target: HTMLDivElement = anyEvent.target;
								if (!target.getAttribute("draggable")) return
								if (!componentRef.current) return
								const leftLimit = componentRef.current.clientLeft
								const topLimit = componentRef.current.clientTop
								const rightLimit = componentRef.current.clientWidth - leftLimit
								const bottomLimit = componentRef.current.clientHeight - topLimit
								if (event.pageX - currentMousePos.offsetLeft < leftLimit) return
								if (event.pageY - currentMousePos.offsetTop < topLimit) return
								if (event.pageX + currentMousePos.offsetRight > rightLimit) return
								if (event.pageY + currentMousePos.offsetBottom > bottomLimit) return
								target.setAttribute(
									'style',
									`
								position:absolute !important;
								width: fit-content;
							    left:${currentMousePos && currentMousePos.X
										? event.pageX - currentMousePos.X
										: event.pageX
									}px;
							    top:${currentMousePos && currentMousePos.Y
										? event.pageY - currentMousePos.Y
										: event.pageY
									}px;
							    `,
								);
							}}
						>
							{child}
						</div>
					);
				})}
			</div>
		</>
	);
}