import Image from "next/image";
import React from "react";

function CardList({ style1, style2, data, hoverStyle }: any) {
	//   console.log(data);
	return (
		<div className="row">
			<div className="col-12">
				<div className={style1}>
					<div className="row">
						{data.map((card: any, index: number) => {
							const { heading, body, footer, image, hoverImage } = card;
							return (
								<div
									className="col-lg-4 col-md-6 wow move-up animated"
									key={index}
								>
									<div className={`ht-box-images ${style2}`}>
										<div className="image-box-wrap custom_box">
											<div className="box-image">
												<div className="default-image">
													<div className="img-fluid">
														<Image src={image} alt="" fill />
													</div>
												</div>
												{hoverImage && (
													<div className={hoverStyle}>
														<div className="img-fluid">
															<Image
																src={hoverImage}
																alt=""
																fill
															/>
														</div>
													</div>
												)}
											</div>
											<div className="content">
												<h5 className="heading">{heading}</h5>
												<div className="text">{body}</div>
												<div className="box-images-arrow">
													<span className="button-text">
														{footer}
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardList;
