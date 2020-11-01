import React, {PureComponent} from "react";
import TabOverview from "../components/tab-overview/tab-overview";
import TabDetails from "../components/tab-details/tab-details";
import TabReviews from "../components/tab-reviews/tab-reviews";

const withChangingActiveTab = (Component) => {
  class WithChangingActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        tabIndex: 0
      };

      this.onTabLinkClick = this.onTabLinkClick.bind(this);
      this.renderSwitch = this.renderSwitch.bind(this);
    }

    onTabLinkClick(index) {
      this.setState({tabIndex: index});
    }

    renderSwitch(props) {
      switch (this.state.tabIndex) {
        default:
        case 0:
          return <TabOverview />;
        case 1:
          return <TabDetails />;
        case 2:
          return <TabReviews reviews={props} />;
      }
    }

    render() {
      const {tabIndex} = this.state;

      return (
        <Component
          {...this.props}
          renderSwitch={this.renderSwitch}
          tabIndex={tabIndex}
          onTabLinkClick={this.onTabLinkClick}
        />
      );
    }
  }

  return WithChangingActiveTab;
};

export default withChangingActiveTab;
