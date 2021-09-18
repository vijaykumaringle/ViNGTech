import React, { Component } from 'react'

//imports external components
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

//API data
const api_nasa = {
    "API_Name": "NASA",
    "API_key": "mSHnvBrnNo5NpCjqSlw1jfcnEYpayjyebBsWPB8C"
}


export class Mrp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            images: [],
            mrp_sol: 905,
            mrp_rover: "Curiosity"
        };
    }

    //get Mrp method
    componentDidMount() {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${this.state.mrp_rover}/photos?sol=${this.state.mrp_sol}&page=2&api_key=${api_nasa.API_key}`).then(res => res.json()).then((result) => {
            this.setState({
                isLoaded: true,
                items: result.photos
            });
            let Arr_images = [];
            this.state.items.map((item, index) => {
                //return this.state.images.push({original: item.img_src})
                let imglink = item.img_src.replace('http://','https://');
                return Arr_images.push({ original: `${imglink}`, thumbnail: `${imglink}`, originalTitle: `${item.rover.name}_${item.camera.name}_${item.id}` })
            });
            this.setState({
                images: Arr_images
            })
            console.log(result.photos);
        },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            });

    }

    //onChange input
    onChangeInput(event) {
        if (event.target.id) {
            this.setState({
                [event.target.id]: event.target.value
            });
        }
    }

    //get data method 
    getData(mrp_rover, mrp_sol, api_key) {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${mrp_rover}/photos?sol=${+mrp_sol}&page=2&api_key=${api_key}`).then(res => res.json()).then((result) => {
            this.setState({
                isLoaded: true,
                items: result.photos
            });
            let Arr_images = [];
            this.state.items.map((item, index) => {
                //return this.state.images.push({original: item.img_src})
                let imglink = item.img_src.replace('http://','https://');
                return Arr_images.push({ original: `${imglink}`, thumbnail: `${imglink}`, originalTitle: `${item.rover.name}_${item.camera.name}_${item.id}` })
            });
            this.setState({
                images: Arr_images
            })
            console.log(result.photos);
        },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            });
    }

    //on button click
    onBtnClick(event) {
        if(event.target.id === "mrp_btn") {
            this.getData(this.state.mrp_rover, this.state.mrp_sol, api_nasa.API_key)
        }
    }


    render() {
        const { error, isLoaded, images } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="mrp_container" >
                    <div className="grid-item-astro mrp_title">
                        <h2>Mars Rover Photos</h2>
                    </div>
                    <div className="grid-item-astro mrp_img_div">
                        <ImageGallery items={images} thumbnailPosition="left" />
                    </div>
                    <div className="grid-item-astro mrp-input-div">
                        <div className="mrp-input">
                            <label>Rover: </label>
                            <select value={this.state.mrp_rover} id="mrp_rover" width="100px" onChange={this.onChangeInput.bind(this)}>
                                <option value="Curiosity">Curiosity</option>
                                <option value="Opportunity">Opportunity</option>
                                <option value="Spirit">Spirit</option>
                            </select>
                        </div>
                        <div className="mrp-input">
                            <label>Sol: </label>
                            <input id="mrp_sol" type="number" width="100px" value={this.state.mrp_sol} onChange={this.onChangeInput.bind(this)} />
                        </div>
                        <div className="mrp-input">
                            <button id="mrp_btn" disabled width="100px" onClick={this.onBtnClick}>Submit</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Mrp