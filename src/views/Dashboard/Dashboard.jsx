import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { bugs, website, server } from "variables/general";
import Piechart from "./Piechart";
import CheckboxList from "./Msgs";
// import Totalusers from "./totalusers";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    var simpleLineChartData = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      series: [
        [12, 9, 7, 8, 5],
        [2, 1, 3.5, 7, 3],
        [1, 3, 4, 5, 6]
      ]
    }
    // console.log(this.props)
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                <div style={{fontSize:"50px"}}>18</div>
                  {/* <Icon>mood</Icon> */}
                </CardIcon>
                {/* <p className={classes.cardCategory}>Total Riders</p> */}
                {/* <h3 className={classes.cardTitle}>18</h3> */}
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                <LocalOffer />
                Total Riders
                </div>
              </CardFooter>
            </Card>
          </GridItem>

        

          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                <div style={{fontSize:"50px"}}>8</div>
                {/* <Icon>mood</Icon> */}
                </CardIcon>
                <CardIcon color="warning">
                <div style={{fontSize:"50px"}}>4</div>
                {/* <Icon>sentiment_very_dissatisfied</Icon> */}
                </CardIcon>
                <CardIcon color="danger">
                <div style={{fontSize:"50px"}}>3</div>
                {/* <Icon>mood_bad</Icon> */}
                </CardIcon>
                {/* <p className={classes.cardCategory}>Moderate Riders</p>
                <h3 className={classes.cardTitle}>4</h3> */}
                
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                <LocalOffer />
                 Realtime Riders Status
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                <div style={{fontSize:"50px"}}>15</div>
                  {/* <Icon>supervisor_account</Icon> */}
                </CardIcon>
                {/* <p className={classes.cardCategory}>Online Users</p> */}
                {/* <h3 className={classes.cardTitle}>6</h3> */}
              </CardHeader>
              <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Total Realtime Riders
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                <div style={{fontSize:"50px"}}>18</div>
                  {/* <Icon>mood</Icon> */}
                </CardIcon>
                {/* <p className={classes.cardCategory}>Total Riders</p> */}
                {/* <h3 className={classes.cardTitle}>18</h3> */}
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                <LocalOffer />
                Total Riders
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        
        </GridContainer>
        
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
            <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>Total Users Categorization</h4>
                {/* <p className={classes.cardCategoryWhite}>
                  New employees on 15th September, 2016
                </p> */}
              </CardHeader>
              <Piechart />
              <CardBody>
                {/* <h4 className={classes.cardTitle}>Total Users Categorization </h4> */}
                {/* <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p> */}
              </CardBody>
            </Card>
          </GridItem> 
          <GridItem xs={12} sm={12} md={6}>
          <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Daily Users Speed</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 5%
                  </span>{" "}
                  increase in speed today.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          {/* <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Email Subscriptions</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Completed Tasks</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
              </GridItem> */}
        </GridContainer>
        <GridContainer >
          <GridItem xs={12} sm={12} md={6}>
            <CustomTabs
              title="Push Notifications:"
              headerColor="warning"
              tabs={[
                {
                  tabName: "Safe",
                  tabIcon: BugReport,
                  tabContent: (
                    <CheckboxList />
                  )
                },
                {
                  tabName: "Moderate",
                  tabIcon: Code,
                  tabContent: (
                    <CheckboxList />
                  )
                },
                {
                  tabName: "Unsafe",
                  tabIcon: Cloud,
                  tabContent: (
                    <CheckboxList />
                  )
                }
              ]}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="danger">
                <h4 className={classes.cardTitleWhite}>Leader Board</h4>
                {/* <p className={classes.cardCategoryWhite}>
                  New employees on 15th September, 2016
                </p> */}
              </CardHeader>
              <CardBody>
                <Table 
                  root={{fontSize: "40px"}}
                  tableHeaderColor="danger"
                  tableHead={["Rank", "Name", "Rides", "Bike"]}
                  tableData={ [
                    ["1", "User5", "8", "Pulsar"],
                    ["2", "User7", "20", "Honda City"],
                    ["3", "User10", "50", "Discover"],
                    ["4", "User3", "5", "Duke"]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
