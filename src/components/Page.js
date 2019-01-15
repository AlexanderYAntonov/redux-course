import React from 'react';
import PropTypes from 'prop-types';
export class Page extends React.Component {
	onBtnClick = e => {
		const year = +e.currentTarget.innerText;
		const { user_id } = this.props;
		console.log('Ready to send user_id=', user_id);
		this.props.getPhotos(year, user_id);
	};

	renderTemplate = () => {
		const { photos } = this.props;
		let photosTemplate = null;
		if (photos.length) {
			photosTemplate = photos.map(function(item) {
				return (
					<div className="photo">
						<img src={item.src} alt="VK" />
						<span>{item.likes} likes</span>
					</div>
				);
			});
		} else {
			photosTemplate = <p>No photos</p>;
		}
		return photosTemplate;
	};

	render() {
		const { year, isFetching, photos } = this.props;
		return (
			<div className="page ib">
				<div>
					<button className="btn" onClick={this.onBtnClick}>
						2018
					</button>
					<button className="btn" onClick={this.onBtnClick}>
						2017
					</button>
					<button className="btn" onClick={this.onBtnClick}>
						2016
					</button>
					<button className="btn" onClick={this.onBtnClick}>
						2015
					</button>
					<button className="btn" onClick={this.onBtnClick}>
						2014
					</button>
				</div>
				<h3>
					{year} год [{photos.length}]
				</h3>
				<div className="gallery">
					{isFetching ? <p>Загружаем...</p> : this.renderTemplate()}
				</div>
			</div>
		);
	}
}
Page.propTypes = {
	year: PropTypes.number.isRequired,
	user_id: PropTypes.string.isRequired,
	photos: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	getPhotos: PropTypes.func.isRequired,
};
