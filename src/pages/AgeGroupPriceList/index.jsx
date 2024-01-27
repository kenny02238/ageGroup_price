import AgeGroupPriceList from "../../components/ageGroupPriceList/AgeGroupPriceList";
const AgeGroupPriceListPage = () => {
  return (
    <div className="w-full flex justify-center my-[300px]">
      <AgeGroupPriceList
        onChange={(result) => {
          console.log(result);
        }}
      />
    </div>
  );
};

export default AgeGroupPriceListPage;
