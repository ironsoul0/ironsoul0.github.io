import React, { PureComponent } from 'react';
import { Transition, animated } from 'react-spring';

export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.children = React.Children.toArray(props.children);
    this.state = {
      count: React.Children.count(props.children),
      currentIndex: 0
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  componentWillUnmount() {
    clearInterval(this.animation);
  }

  startAnimation() {
    this.animation = setInterval(() => {
      if (window.document.visibilityState === 'hidden') {
        // tab invisible; pause for one round to avoid flickering
        this.pauseAnimation = true;
        return;
      }
      if (!this.pauseAnimation) {
        this.setState({
          currentIndex: (this.state.currentIndex + 1) % this.state.count
        });
      } else {
        this.pauseAnimation = false;
      }
    }, this.props.duration || 1500);
  }

  render() {
    const currentIndex = this.state.currentIndex;
    return (
      <span>
        <Transition
          native
          keys={currentIndex}
          initial={null}
          from={{ opacity: 0, y: -50 }}
          enter={{ opacity: 1, y: 0 }}
          leave={{ opacity: 0, y: 60 }}
        >
          {({ opacity, y }) => (
            <animated.span
              style={{
                position: 'absolute',
                marginLeft: '9px',
                transform: y.interpolate(y => `translate3d(0, ${y}%, 0)`),
                opacity
              }}
            >
              {this.props.children[currentIndex]}
            </animated.span>
          )}
        </Transition>
      </span>
    );
  }
}