import React, { useState } from 'react';
import { PannelMousePosition } from '../../types/pannelTypes';
type Props = React.CSSProperties & {
	children: JSX.Element[];
}
export const PannelAllowScreen: React.FunctionComponent<Props> = (props) => {
	const { children } = props
	const [mousePos, setMousePos] = useState<PannelMousePosition>({});

	return (
		<>
			<div style={{ ...props, display: 'block', position: "relative", width: "100vw", height: "100vh" }}>
				{children.map((child: JSX.Element, i: number) => {
					return (
						<div
							key={i}
							className=""
							draggable={child.props.draggable ? child.props.draggable : true}
							style={{ width: "fit-content", position: "absolute" }}
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
								const target: HTMLDivElement = anyEvent.target;
								if (!target.getAttribute("draggable")) return
								target.setAttribute(
									'style',
									`
								position:absolute !important;
								width: fit-content;
							    left:${mousePos[i] && mousePos[i].X
										? event.clientX - mousePos[i].X
										: event.clientX
									}px;
							    top:${mousePos[i] && mousePos[i].Y
										? event.clientY - mousePos[i].Y
										: event.clientY
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