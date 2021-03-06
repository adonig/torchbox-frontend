// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
// Components
import AnimatedCharacter from '@components/animated-character'
import ParentPageLink from '@components/parent-page-link'
// Utilities
import { renderTorchUp } from '@utils/torchup'
import { pageUrl } from '@utils/urls'
// Styles
import styles from './hero.module.scss'

class Hero extends React.Component {

  render() {
    const {
      title,
      description,
      links,
      collapsed,
      greetingImageType,
      parentLink,
      pageNavRef,
    } = this.props

    return (
      <div
        className={[
          collapsed ? styles.collapsedHeroContainer : styles.heroContainer,
        ].join(' ')}
      >
        <section className={styles.heroContent}>
          {parentLink ? (
            <ParentPageLink
              label={parentLink.name}
              href={pageUrl(parentLink.servicePage)}
            />
          ) : null}

          <h1 className={styles.heroTitle} {...renderTorchUp(title)} />
          <div className={styles.heroDesc} {...renderTorchUp(description)} />
          {links != null ? (
            <div ref={pageNavRef}>
              <nav className={styles.heroLinksContainer} aria-label="In page navigation">
                <ul className={styles.heroLinksList}>
                  {links.map((link, index) => (
                    <li
                      key={`hero-link-${index}`}
                      className={styles.heroLinksItem}
                    >
                      <a onClick={link.onClick} href={link.href}>
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ) : null}
        </section>
        <AnimatedCharacter character={greetingImageType} />
      </div>
    )
  }
}

Hero.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.array,
  collapsed: PropTypes.bool,
  greetingImageType: PropTypes.string,
  parentLink: PropTypes.object,
}

Hero.defaultProps = {
  links: [],
  collapsed: false,
  greetingImageType: 'woman-left',
}

export default Hero
