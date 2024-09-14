interface Props {
  photo: string;
  children?: React.ReactNode;
}

function NewsletterSection({ photo, children }: Props) {
  return (
    <section className="w-full h-[740px] relative">
      <img
        src={photo}
        alt=""
        loading="lazy"
        className="absolute object-cover w-full h-full bg-black/50 -z-10"
      />

      <div className="h-full py-[152px] px-[80px] flex flex-col justify-between items-center">
        <div>
          <p className="mx-auto font-bold text-6 leading-9 text-white text-center">
            Sed ut perspiciatis unde omnis
          </p>
          <p className="mt-[23px] text-white/80 text-[18px] leading-[30px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary.
          </p>
          <div className="w-full h-[1px] bg-white/50 my-8"></div>
          <div className="h-[43px]">
            <div className="text-[14px] leading-[22px] text-center text-white/60">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore.
            </div>
          </div>
        </div>

        <div className="exo-2 w-[500px] text-center text-white flex flex-col relative">
          <p className="mb-4 font-bold">Subscribe to our newsletter</p>

          {children}
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
