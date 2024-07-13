import { DatePicker, TimePicker } from "antd";

const DateTimePicker = () => {
  return (
    <div>
      <DatePicker />
      <DatePicker.RangePicker picker="month" />
      <TimePicker/>
    </div>
  );
};

export default DateTimePicker;
