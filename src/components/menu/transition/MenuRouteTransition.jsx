import React from "react"
import { Route } from 'react-router-dom'
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
  out: {
    opacity: 0,
    pathLength: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const RouteTransition = ({ children, component, render, ...props }) => {
  return (
    <motion.div
      className="d-flex flex-column flex-root"
      initial="initial"
      animate="animate"
      exit="out"
      pageTransition={pageTransition}
      variants={pageVariants}
    >
      <Route {...props}>
        {routeProps => {
          if (typeof children === 'function') {
            return children(routeProps)
          }

          if (!routeProps.match) {
            return null
          }

          if (children) {
            return children
          }

          if (component) {
            return React.createElement(component, routeProps)
          }

          if (render) {
            return render(routeProps)
          }

          return null
        }}
      </Route>
    </motion.div>
  );
}


export default RouteTransition
