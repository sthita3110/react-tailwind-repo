import { Routes, Route } from "react-router-dom";
import Counter from "../Components/Counter";
import BmiFormMetric from "../Components/Main/BmiFormMetric";
import BmiFormUS from "../Components/Main/BmiFormUS";
import Weather from "../Components/Weather/Weather";
import PageNotFound from "../Components/PageNoteFound/PageNotFound";

const RoutesModule = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="BMI" element={<BmiFormMetric />} />
        <Route path="BMI/metric" element={<BmiFormMetric />} />
        <Route path="BMI/us" element={<BmiFormUS />} />
        <Route path="weather" element={<Weather />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
export default RoutesModule;
