import React, { Component } from 'react'

//API data
const api_nasa = {
    "API_Name": "NASA",
    "API_key": "mSHnvBrnNo5NpCjqSlw1jfcnEYpayjyebBsWPB8C"
}

export class Apd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    //get AOD method
    componentDidMount() {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_nasa.API_key}`).then(res => res.json()).then((result) => {
            this.setState({
                isLoaded: true,
                items: result
            });
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
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="apd_container">
                    <div className="grid-item apd_title">
                        <h2>Astronomy Pic of the day</h2>
                    </div>
                        <div className="grid-item apd_img_div">
                            {items.media_type !== "video" ? <img src={items ? items.url : "#"} className="Apd_img" alt="apd" /> : <iframe className="Apd_vid" title={items.title} src={items.url}></iframe>}
                        </div>
                        <div className="grid-item Apd_data">
                            <p>
                            <b>Title:</b>  {items.title} 
                            <br/>
                            <b> Author &copy;:</b> {items.copyright ? items.copyright :"Public domain Image"}
                            <br/>
                            <b> Date:</b> {items.date}
                            </p>
                            <p>
                            <b> Explanation:</b><br/><span className="apd-para"> "{items.explanation}" </span>
                            </p>
                        </div>
                </div>
            )
        }
    }
}

export default Apd
