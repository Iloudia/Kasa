function Banner({ title = null, bgImg }) {
  return (
    <section className="banner" style={{ backgroundImage: `url(${bgImg})` }}>
      {title && <h1 className="banner-title">{title}</h1>}
    </section>
  );
}

export default Banner;