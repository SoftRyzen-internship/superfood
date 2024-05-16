import { PolicyContentProps } from './PolicySection.types';

function PolicySection({ content }: PolicyContentProps) {
  let counter = 0;

  return (
    <section className="pt-[140px] pb-12 md:pt-[192px] md:pb-20 xl:pt-[212px]">
      <div className="container md:px-[70px] xl:px-[136px]">
        {content ? (
          <div key={content._id}>
            <h1 className="font-roboto text-green text-[18px] font-bold leading-[1.30] uppercase mb-10 md:text-[24px] md:leading-[1.15] md:text-center md:mb-14 md:w-[580px] xl:w-full xl:text-[30px] xl:mb-16">
              {content.title}
            </h1>
            {content.description.map((item, index) => (
              <div key={index}>
                {item.children.map(child => {
                  const element =
                    counter % 2 === 0 ? (
                      <p
                        key={counter}
                        className="font-geologica text-textBody font-light text-[14px] leading-[1.35] tracking-[-0.28px] mb-8 md:text-[16px] md:tracking-[-0.32px] md:mb-10 xl:text-[18px] xl:tracking-[-0.36px]"
                      >
                        {child.text}
                      </p>
                    ) : (
                      <h2
                        key={counter}
                        className="font-roboto text-green text-[14px] font-bold leading-[1.15] uppercase mb-4 md:text-[16px] md:leading-[1.30] xl:text-[20px] xl:mb-6"
                      >
                        {child.text}
                      </h2>
                    );
                  counter++;
                  return element;
                })}
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
}

export default PolicySection;
