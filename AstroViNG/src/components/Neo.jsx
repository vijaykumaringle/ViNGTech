import React, { Component } from 'react'

import DataTable from 'react-data-table-component';

//API data
const api_nasa = {
    "API_Name": "NASA",
    "API_key": "mSHnvBrnNo5NpCjqSlw1jfcnEYpayjyebBsWPB8C"
}


export class Neo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            Arr_neo_data: [],
            neo_start_date: new Date().toISOString().slice(0, 10),
            neo_end_date: new Date().toISOString().slice(0, 10)
        };
    }

    //get Mrp method
    componentDidMount() {
        fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.state.neo_start_date}&end_date=${this.state.neo_end_date}&api_key=${api_nasa.API_key}`).then(res => res.json()).then((result) => {
            this.setState({
                isLoaded: true,
                items: result.near_earth_objects[`${this.state.neo_start_date}`]
            });
            let Arr_neo = [];
            this.state.items.map((item, index) => {
                //return this.state.images.push({original: item.img_src})
                return Arr_neo.push({ 
                    id: `${item.id}`,
                    name: `${item.name}`,
                    url: `<a href='${item.nasa_jpl_url}>${item.nasa_jpl_url}'</a>`,
                    absolute_magnitude_h: `${item.absolute_magnitude_h}`,
                    estimated_diameter: `${+item.estimated_diameter.meters.estimated_diameter_min.toFixed(2)} m - ${+item.estimated_diameter.meters.estimated_diameter_max.toFixed(2)} m`,
                    is_potentially_hazardous_asteroid: `${item.is_potentially_hazardous_asteroid}`
                 })
            });
            this.setState({
                Arr_neo_data: Arr_neo
            })
            console.log(result.near_earth_objects);
        },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            });

    }

    onBtnClick(event) {
        console.log("Submit Clicked!!");
        fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.state.neo_start_date}&end_date=${this.state.neo_end_date}&api_key=${api_nasa.API_key}`).then(res => res.json()).then((result) => {
            this.setState({
                isLoaded: true,
                items: result.near_earth_objects[`${this.state.neo_start_date}`]
            });
            let Arr_neo = [];
            this.state.items.map((item, index) => {
                //return this.state.images.push({original: item.img_src})
                return Arr_neo.push({ 
                    id: `${item.id}`, 
                    name: `${item.name}`, 
                    url: `<a href=${item.nasa_jpl_url}>${item.nasa_jpl_url}</a>`, 
                    absolute_magnitude_h: `${item.absolute_magnitude_h}`,
                    estimated_diameter: `${+item.estimated_diameter.meters.estimated_diameter_min.toFixed(2)}m - ${+item.estimated_diameter.meters.estimated_diameter_max.toFixed(2)}m`,
                    is_potentially_hazardous_asteroid: `${item.is_potentially_hazardous_asteroid}`
                 })
            });
            this.setState({
                Arr_neo_data: Arr_neo
            })
            console.log(result.near_earth_objects);
        },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            });
    }

    columns = [
        {
            name: 'ID',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
            // right: true,
        },
        {
            name: 'Url',
            selector: 'url',
            // sortable: true,
            // right: true,
        },
        {
            name: 'H (mag)',
            selector: 'absolute_magnitude_h',
            sortable: true,
            // right: true,
        },
        {
            name: 'Diameter (m)',
            selector: 'estimated_diameter',
            // sortable: true,
            // right: true,
        },
        {
            name: 'Potential threat?',
            selector: 'is_potentially_hazardous_asteroid',
            sortable: true,
            // right: true,
        },
    ];

    customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
            }
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
    };

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="mrp_container" >
                    <div className="grid-item mrp_title">
                        <h2>Near Earth Objects</h2>
                    </div>
                    <div className="grid-item mrp_img_div">
                        <DataTable
                            title="Near Earth Objects"
                            columns={this.columns}
                            customStyles={this.customStyles}
                            data={this.state.Arr_neo_data}
                        />
                    </div>
                    <div className="grid-item mrp-input-div">
                        <div className="mrp-input">
                            <label>Start date: </label>
                            <input type="date" value={this.state.neo_start_date} id="mrp_start_date"
                                onChange={event => this.setState({ neo_start_date: event.target.value })}
                            />
                        </div>
                        <div className="mrp-input">
                            <label>End date: </label>
                            <input id="mrp_end_date" type="date" value={this.state.neo_end_date}
                                onChange={event => this.setState({ neo_end_date: event.target.value })}
                            />
                        </div>
                        <div className="mrp-input">
                            <button id="mrp_btn" width="100px" onClick={this.onBtnClick.bind(this)}>Submit</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Neo