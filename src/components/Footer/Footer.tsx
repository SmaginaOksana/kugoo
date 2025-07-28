import Button from "../common/Button/Button";

function Footer() {
  return (
    <footer>
      <div className="@container m-auto px-[165px] pt-[24px] pb-[21px] bg-purple grid grid-cols-[auto_410px_148px] gap-[20px] text-white text-[16px]">
        <p className="font-semibold">
          ОСТАВЬТЕ СВОЮ ПОЧТУ И СТАНЬТЕ ПЕРВЫМ, КТО ПОЛУЧИТ СКИДКУ НА НОВЫЕ
          САМОКАТЫ
        </p>
        <form>
          <input
            type="text"
            id="email"
            placeholder="Введите Ваш email"
            className="px-[25px] py-[15px] w-full rounded-[5px] bg-white/20"
          />
        </form>
        <Button
          typeOfButton="whiteButton"
          className="px-[25px] py-[15px] border-none"
        >
          Подписаться
        </Button>
      </div>
      <div className="@container m-auto px-[165px] pt-[46px] pb-[18px] bg-gray">
        <div></div>
        <hr />
        <div></div>
        <hr />
        <div></div>
      </div>
    </footer>
  );
}

export default Footer;
