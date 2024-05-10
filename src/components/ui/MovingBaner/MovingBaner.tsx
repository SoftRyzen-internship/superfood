import banners from '@/data/banners.json';
import Circle from '@/../public/icons/Circle.svg';
import styles from './MovingBaner.module.css';

function MovingBaner() {
  const renderBanners = () => {
    return banners.map((banner, index) => (
      <li
        key={index}
        className="flex gap-6 items-center text-strokeGreen text-[40px] leading-[46px] font-bold text-nowrap whitespace-nowrap font-roboto uppercase"
      >
        <p>{banner.text}</p>
        <Circle width={17.95} height={16} className="fill-strokeGreen" />
      </li>
    ));
  };

  const renderMovingLineContainers = (count: number) => {
    const movingLineContainers = [];
    for (let i = 0; i < count; i++) {
      movingLineContainers.push(
        <div key={i}>
          <ul
            className={`flex gap-6 h-[102px] overflow-hidden ${styles.movingLine}`}
            aria-hidden={i > 0}
          >
            {renderBanners()}
          </ul>
        </div>
      );
    }
    return movingLineContainers;
  };

  return (
    <div className="absolute left-0 w-full bg-darkGreen overflow-hidden flex gap-6 select-none">
      {renderMovingLineContainers(3)}
    </div>
  );
}

export default MovingBaner;
