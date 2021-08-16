import React from "react"
import { Route } from 'react-router-dom'
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.3
};

const RouteTransition = ({ children, component, render, ...props }) => {
  return (
    <motion.div
      className="d-flex flex-column flex-root"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
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
