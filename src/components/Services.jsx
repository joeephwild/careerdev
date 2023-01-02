import React from 'react'

const styles = {
    wrapper: 'mt-5 grid grid-cols-1 md:grid-cols-2 gap-x-5 ',
    image: "",
    textWrapper: 'max-w-[500px] text-center flex flex-col items-center justify-center px-[9px] md:px-[20px]',
    heading: 'md:text-5xl max-w-[20rem] leading-8 tracking-wider text-[#fff]  font-bold mb-[20px]  uppercase',
    text: 'text-[22px] text-[#fff] w-full text-center  mb-[20px]',
    button: 'border-[#fafafa] border-2 text-[#fafafa] mb-5 px-4 py-2 rounded-full'
  }

const Services = ({title, image, text, style}) => {
  return (
    <section className={styles.wrapper}>
    <img src={image} className={`w-full ${style}`} alt="banner"/>
    <div className={styles.textWrapper}>
      <h2 className={styles.heading}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  </section>
  )
}

export default Services