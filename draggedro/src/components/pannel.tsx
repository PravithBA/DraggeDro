import React, { useState } from 'react';

function PannelAllowAnywhere(
	props: React.CSSProperties & {
		children: Array<JSX.Element>;
	},
) {
	const { children } = props
	const [mousePos, setMousePos] = useState<{ [key: number]: { X: number, Y: number } }>({});

	return (
		<>
			<div style={{ ...props, display: 'block', position: "relative" }}>
				{children.map((child: JSX.Element, i: number) => {
					return (
						<div
							key={i}
							className=""
							draggable={child.props.draggable ? child.props.draggable : true}
							style={{ width: "fit-content", position: "absolute" }}
							onMouseDown={(event: React.MouseEvent) => {
								setMousePos((mousePos: any) => {
									let newPos = mousePos;
									const anyEvent: any = event;
									const target: Element = anyEvent.target;
									newPos[i] = {
										X: event.clientX - target.getBoundingClientRect().left,
										Y: event.clientY - target.getBoundingClientRect().top,
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

export { PannelAllowAnywhere }