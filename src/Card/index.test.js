import React from "react"
import { shallow } from 'enzyme'
import Card from '.'

import img from './img/placeholder.png'
import Button from '../Button'

describe('Card', () => {
  it('renders title correctly', () => {
    const title = "Card Title Test"
    const content = "Card content test"
    const wrapper = shallow(
      <Card title={title} text={content}/>
    )
    expect(wrapper.contains(title)).toEqual(true)
  })

  it('renders content correctly', () => {
    const title = "Card Title Test"
    const content = "Card content test"
    const wrapper = shallow(
      <Card title={title} text={content}/>
    )
    expect(wrapper.contains(content)).toEqual(true)
  })

  it('renders link content correctly', () => {
    const title = "Card Title Test"
    const content = "Card content test"
    const linkContent = "Link content test"
    const wrapper = shallow(
      <Card title={title} text={content} linkContent={linkContent}/>
    )
    expect(wrapper.contains(linkContent)).toEqual(true)
  })

  it('renders href correctly', () => {
    const title = "Card Title Test"
    const content = "Card content test"
    const href = "https://www.compfest.id/"
    const wrapper = shallow(
      <Card title={title} text={content} href={href}/>
    )
    expect(wrapper.find('[href="https://www.compfest.id/"]').length).toBe(1)
  })

  // large-card

  it('renders mini title correctly', () => {
    const miniTitle = 'mini title'
    const content = "Card content test"
    const wrapper = shallow(
      <Card type="large-card" miniTitle={miniTitle} text={content}/>
    )
    expect(wrapper.contains(miniTitle)).toEqual(true)
  })

  it('renders title correctly', () => {
    const title = 'title'
    const content = "Card content test"
    const wrapper = shallow(
      <Card type="large-card" title={title} text={content}/>
    )
    expect(wrapper.contains(title)).toEqual(true)
  })

  it('renders image correctly', () => {
    const content = "Card content test"
    const wrapper = shallow(
      <Card type="large-card" image={img} text={content}/>
    )
    expect(wrapper.find("img").prop("src")).toEqual(img)
  })

  it('renders top button correctly', () => {
    const button = <Button>Hello</Button>
    const content = "Card content test"
    const wrapper = shallow(
      <Card type="large-card" buttonTop={button} text={content}/>
    )
    expect(wrapper.contains(button)).toEqual(true)
  })

  it('renders bottom button correctly', () => {
    const button = <Button>Hello</Button>
    const content = "Card content test"
    const wrapper = shallow(
      <Card type="large-card" buttonBottom={button} text={content}/>
    )
    expect(wrapper.contains(button)).toEqual(true)
  })

  // article-card

  it('renders image correctly', () => {
    const content = "Card content test"
    const wrapper = shallow(
      <Card type="article-card" image={img} text={content}/>
    )
    expect(wrapper.find("img").prop("src")).toEqual(img)
  })

  it('renders category correctly', () => {
    const content = "Card content test"
    const category = 'category'
    const wrapper = shallow(
      <Card type="article-card" category={category} text={content}/>
    )
    expect(wrapper.contains(category)).toEqual(true)
  })

  it('renders title correctly', () => {
    const content = "Card content test"
    const title = 'title'
    const wrapper = shallow(
      <Card type="article-card" title={title} text={content}/>
    )
    expect(wrapper.contains(title)).toEqual(true)
  })

  // Carousel card

  it('renders caption correctly', () => {
    const caption = "card caption"
    const wrapper = shallow(
      <Card type="carousel-card" caption={caption}/>
    )
    expect(wrapper.contains(caption)).toEqual(true)
  })

  it('renders image correctly', () => {
    const wrapper = shallow(
      <Card type="carousel-card" image={img}/>
    )
    expect(wrapper.find("img").prop("src")).toEqual(img)
  })
})
