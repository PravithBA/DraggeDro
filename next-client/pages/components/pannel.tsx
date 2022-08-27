import React, { useState } from 'react';

export default function PannelAllowAnywhere(
	props: React.CSSProperties & {
		children: Array<JSX.Element>;
	},
) {
	const { children } = props;
	const [mousePos, setMousePos] = useState<any>({});

	return (
		<div style={{ ...props, display: 'block' }}>
			{children.map((child, i) => {
				return (
					<div
						key={i}
						draggable
						style={{ display: 'inline-block', left: '100px', top: '100px' }}
						onMouseDown={(event: React.MouseEvent) => {
							let newPos = mousePos;
							const anyEvent: any = event;
							const target: Element = anyEvent.target;
							newPos[i] = {
								X: event.clientX - target.getBoundingClientRect().left,
								Y: event.clientY - target.getBoundingClientRect().top,
							};
							setMousePos({ ...newPos });
						}}
						onDragEnd={(event: React.DragEvent<HTMLDivElement>) => {
							const anyEvent: any = event;
							const target: HTMLDivElement = anyEvent.target;
							target.setAttribute(
								'style',
								`
							    left:${
										mousePos[i] && mousePos[i].X
											? event.clientX - mousePos[i].X
											: event.clientX
									}px;
							    top:${
										mousePos[i] && mousePos[i].Y
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
	);
}
