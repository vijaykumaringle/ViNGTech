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
        const { error, isLoaded, items, images } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="mrp_container" >
                    <div className="grid-item mrp_title">
                        <h2>Mars Rover Photos</h2>
                    </div>
                    <div className="grid-item mrp_img_div">
                        fdfd
                    </div>
                    <div className="grid-item mrp-input-div">
                        dfs
                    </div>
                </div>
            )
        }
    }
}

export default InsightMarsWeather