import React from 'react';
import Button from '../../common/Button/Button';

class FollowToggleButton extends React.Component {

   state = {
      buttonMode: null
   };

   componentDidMount() {
      if (this.props.followed) this.setState({ buttonMode: 'unfollow' });
      else this.setState({ buttonMode: 'follow' });
   }

   componentDidUpdate(prevProps) {
      if (prevProps.followed !== this.props.followed) {
         if (this.props.followed) this.setState({ buttonMode: 'unfollow' });
         else this.setState({ buttonMode: 'follow' });
      }
   }

   render() {
      return (
         <Button
            disable={this.props.followingInProgressIds.some(id => id === this.props.userId)}
            text={(this.state.buttonMode === 'follow') ? 'Follow' : 'Unfollow'}
            styles={{
               color: (this.state.buttonMode === 'follow') ? '#105AB1' : '#d45050',
               border: `2px solid ${(this.state.buttonMode === 'follow') ? '#105AB1' : '#d45050'}`,
               width: '100%'
            }}
            onHover={{
               backgroundColor: (this.state.buttonMode === 'follow') ? '#B9D2EA' : '#D49494'
            }}
            onClick={() => {
               if (this.state.buttonMode === 'follow') this.props.follow(this.props.userId);
               else this.props.unfollow(this.props.userId);
            }}
         />
      );
   }
}

export default FollowToggleButton;