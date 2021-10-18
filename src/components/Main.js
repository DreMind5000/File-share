import React, { Component } from 'react';
import { convertBytes } from './helpers';
import pdfIpfs from '../assets/img/pdf-ipfs.png';
import heroImage from '../assets/img/file-upload-hero.svg';
import moment from 'moment';

class Main extends Component {
	render() {
		return (
			<div className='hero-area-container'>
				<div className='hero-area'>
					{/* how to setup metamask instruction text */}
					<p className='text-center text-sm-center text-md-right text-lg-right text-xl-right text-xxl-right mb-5 py-5 mr-0 mr-sm-0 mr-md-5 mr-lg-5 mr-xl-5 mr-xxl-5'>
						<a
							className='font-weight-bold'
							href='https://deliverer.one/knowledgebase'
						>
							NEED HELP CONNECTING TO METAMASK? CLICK HERE
						</a>
					</p>

					{/* how to setup metamask instruction text */}

					{/* hero section start here */}
					<div className='hero-section-container mx-5'>
						<div className='row m-0 d-flex justify-content-between align-items-center'>
							<div className='col-md-5'>
								<h1 className='font-weight-bold'>
									Decentralized Data
								</h1>
								<h2 className='font-weight-bold my-3'>
									File-Sharing Dapp
								</h2>
								<p className='banner-description'>
									Store and share your data/files in Deliverer
									IPFS Blockchain to avoid a single point of
									failure and censorship.
								</p>
							</div>
							<div className='col-md-7'>
								<img
									src={heroImage}
									className='img-fluid'
									alt='hero-banner-img'
								/>
							</div>
						</div>
					</div>
					{/* hero section end here */}
				</div>

				<div className='row bg-danger py-5'>
					<main role='main' className='col-lg-12'>
						<div className='content col-lg-6 offset-lg-3'>
							<p>&nbsp;</p>
							<div className='card mb-3 mx-auto bg-dark p-5'>
								<h2 className='text-center text-white bg-dark'>
									Upload File
								</h2>
								<form
									onSubmit={(event) => {
										event.preventDefault();
										const description =
											this.fileDescription.value;
										this.props.uploadFile(description);
									}}
								>
									<div className='form-group my-3'>
										<br></br>
										<textarea
											id='fileDescription'
											type='text'
											ref={(input) => {
												this.fileDescription = input;
											}}
											className='form-control'
											placeholder='Enter Your Description'
											rows='5'
											required
										/>
									</div>
									<div className='d-flex justify-content-between row m-0'>
										<div class='input-group mb-3 col-md-5 p-0'>
											<input
												type='file'
												id='upload-file'
												class='form-control'
												onChange={
													this.props.captureFile
												}
												className='text-white my-3'
												style={{ display: 'none' }}
											/>
											<label
												htmlFor='upload-file'
												className='btn btn-lg bg-danger navbar-dark btn-block text-white py-3 upload-file'
											>
												<span className='fw-icon'>
													<i class='fas fa-cloud-upload-alt'></i>
													<span
														style={{
															marginLeft: '17px',
														}}
													>
														Select File
													</span>
												</span>
											</label>
										</div>
										<div className='col-md-5 p-0'>
											<button
												type='submit'
												className='btn btn-lg bg-danger navbar-dark btn-block text-white py-3'
											>
												<span className='fw-icon'>
													<i class='fas fa-paper-plane'></i>
													<span
														style={{
															marginLeft: '17px',
														}}
													>
														Upload
													</span>
												</span>
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>

						{/* below part of upload card */}
						<div className='col-lg-10 col-xl-10 col-xxl-10 offset-lg-1 offset-xl-1 offset-xxl-1'>
							<div className='my-5 py-5'>
								<img
									src={pdfIpfs}
									className='img-fluid'
									alt='pdf-ipfs-img'
									width='1150'
									height='250'
								/>
							</div>

							<div className='bg-dark p-3'>
								<div className='table-responsive'>
									<table className='table table-dark table-striped table-bordered table-hover mb-0'>
										<thead style={{ fontSize: '15px' }}>
											<tr className='bg-danger navbar-dark text-white text-center'>
												<th scope='col'>id</th>
												<th scope='col'>name</th>
												<th scope='col'>description</th>
												<th scope='col'>type</th>
												<th scope='col'>size</th>
												<th scope='col'>date</th>
												<th scope='col'>
													uploader/view
												</th>
												<th scope='col'>
													hash/view/get
												</th>
											</tr>
										</thead>

										{/* static test table data */}
										<tbody>
											<tr className='text-white text-center'>
												<td>1</td>
												<td>Test</td>
												<td>Test Desc</td>
												<td>Test</td>
												<td>10MB</td>
												<td>3/7</td>
												<td>Yes</td>
												<td>Yes</td>
											</tr>
										</tbody>

										{this.props.files.map((file, key) => {
											return (
												<thead
													style={{ fontSize: '12px' }}
													key={key}
												>
													<tr>
														<td>{file.fileId}</td>
														<td>{file.fileName}</td>
														<td>
															{
																file.fileDescription
															}
														</td>
														<td>{file.fileType}</td>
														<td>
															{convertBytes(
																file.fileSize
															)}
														</td>
														<td>
															{moment
																.unix(
																	file.uploadTime
																)
																.format(
																	'h:mm:ss A M/D/Y'
																)}
														</td>
														<td>
															<a
																href={
																	'https://etherscan.io/address/' +
																	file.uploader
																}
																rel='noopener noreferrer'
																target='_blank'
															>
																{file.uploader.substring(
																	0,
																	10
																)}
																...
															</a>
														</td>
														<td>
															<a
																href={
																	'https://ipfs.infura.io/ipfs/' +
																	file.fileHash
																}
																rel='noopener noreferrer'
																target='_blank'
															>
																{file.fileHash.substring(
																	0,
																	10
																)}
																...
															</a>
														</td>
													</tr>
												</thead>
											);
										})}
									</table>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		);
	}
}

export default Main;
