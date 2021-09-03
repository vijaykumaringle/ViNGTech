import React, { Component } from 'react'

//API data
const api_nasa = {
    "API_Name": "NASA",
    "API_key": "mSHnvBrnNo5NpCjqSlw1jfcnEYpayjyebBsWPB8C"
}


export class InsightMarsWeather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    //get InsightMarsWeather method
    componentDidMount() {
        fetch(`https://api.nasa.gov/insight_weather/?api_key=${api_nasa.API_key}&feedtype=json&ver=1.0`).then(res => res.json()).then((result) => {
            this.setState({
                isLoaded: true,
                items: result
            });
            // let Arr_images = [];
            // this.state.items.map((item, index) => {
            //     //return this.state.images.push({original: item.img_src})
            //     return Arr_images.push({ original: `${item.img_src}`, thumbnail: `${item.img_src}`, originalTitle: `${item.rover.name}_${item.camera.name}_${item.id}` })
            // });
            // this.setState({
            //     images: Arr_images
            // })
            console.log(result);
        },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            });

    }

    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="mrp_container" >
                    <div className="grid-item-astro mrp_title">
                        <h2>Mars Weather: InSight</h2>
                    </div>
                    <div className="grid-item-astro mrp_img_div">
                        Coming soon...!!
                    </div>
                    <div className="grid-item-astro mrp-input-div">
                    
                    </div>
                </div>
            )
        }
    }
}

export default InsightMarsWeather