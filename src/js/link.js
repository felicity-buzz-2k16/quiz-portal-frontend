import { h } from 'preact'
import { getPath } from './helpers'

const Link = props => h('a', { ...props, href: getPath(props.href) }, ...props.children)

export default Link
