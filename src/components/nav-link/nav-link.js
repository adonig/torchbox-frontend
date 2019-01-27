import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import styles from './nav-link.module.scss'

const NavLink = ({
  title,
  strap,
  badge,
  href,
  alignRight = false,
  onClick,
  active,
  collapsed,
}) => (
  <Link
    to={href}
    className={[
      collapsed ? styles.collapsedNavLink : styles.navLink,
      alignRight ? styles.alignRight : '',
      active ? styles.active : null,
    ].join(' ')}
    onClick={onClick}
  >
    <div className={styles.title}>
      {title}
      {badge != null ? <div className={styles.badge}>{badge}</div> : null}
    </div>
  </Link>
)

NavLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

NavLink.defaultProps = {
  onClick: null,
  isOpen: false,
}

export default NavLink