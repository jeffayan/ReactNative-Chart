import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory-native'



export default class BarChart extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.data.map(d=>{return d}));
        console.log(this.props.data.quarter === undefined ? null : this.props.data.quarter.map(d=>{parseInt(d)}));
        return (
            <View style={styles.container}>
                               {/* Chart Heading  */}
                <Text style={{ textAlign: 'center', marginTop: 20 }}>POC From Jayan</Text>
                <VictoryChart domainPadding={20} >
                               {/* X Axis  */}
                    <VictoryAxis
                        style = {{axis: {stroke: "transparent"}}}  // Make X axis transparent 
                        tickValues={this.props.data.map(d=>{return d.quarter})}
                    />
                               {/* Y Axis  */}
                    <VictoryAxis dependentAxis
                        style = {{axis: {stroke: "transparent"}}} // Make Y axis transparent 
                       // tickValues={this.props.data.map(d=>{return d.earnings})}
                    />
                                {/* Y Axis Top Label  */}
                    <VictoryLabel x={25} y={24} style={styles.title}                        
                        text="Hour"
                    />
                                {/* Bar Chart  */}
                    <VictoryBar
                        style={{ data: { fill: (d) => d.color } }}
                        data={this.props.data}
                        x={this.props.xAxis}
                        y={this.props.yAxis}
                    />

                </VictoryChart>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        marginLeft: 20,
    },
    chart: {
        width: '80%',
        height: 100,
        alignSelf: 'center',
    },

});