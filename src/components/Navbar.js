import React, { Component } from 'react';
import Identicon from 'identicon.js';
import Logo from '../assets/img/logo.png';
import bnbLogo from '../assets/img/bnb-coin.svg';
import avalancheLogo from '../assets/img/avalanche-avax-logo.png';
import maticLogo from '../assets/img/matic-coin.svg';

class Navbar extends Component {
	render() {
		return (
			<div className='bg-danger'>
				<nav class='mx-5 navbar navbar-expand-lg navbar-light py-4'>
					<a
						className='navbar-brand'
						href='http://deliverer-fileshare.one/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src={Logo}
							alt=''
							height='50'
							width='50'
							className=''
						/>
						<span className='font-weight-bold pl-3 text-white'>
							{'   '}
							Deliverer Defi File Sharing
						</span>
					</a>

					<button
						class='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span class='navbar-toggler-icon'></span>
					</button>
					<div class='collapse navbar-collapse' id='navbarNav'>
						<ul class='navbar-nav ml-auto d-flex align-items-center'>
							<li className='nav-item'>
								<a
									target='_blank'
									alt=''
									className='text-white nav-link'
									rel='noopener noreferrer'
									href={
										'https://etherscan.io/address/' +
										this.props.account
									}
								>
									<span>
										{this.props.account.substring(0, 6)}
										{this.props.account.substring(38, 42)}
										<span className='ml-3'>
											<img
												src={bnbLogo}
												height='53'
												width='80'
												alt='bnb-logo'
											/>
										</span>
									</span>
								</a>
							</li>
							<li className='nav-item'>
								{this.props.account ? (
									<img
										alt=''
										className='ml-2'
										width='30'
										height='30'
										src={`data:image/png;base64,${new Identicon(
											this.props.account,
											30
										).toString()}`}
									/>
								) : (
									<span></span>
								)}
							</li>
							<li className='nav-item'>
								<img
									src={avalancheLogo}
									height='53'
									width='53'
									alt='avalanche-logo'
								/>
							</li>

							<li className='nav-item'>
								<img
									src={maticLogo}
									height='53'
									width='80'
									alt='avalanche-logo'
								/>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
