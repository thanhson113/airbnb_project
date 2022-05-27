/** @format */

import { Avatar, Button, Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaoDanhGiaTheoPhongAction } from "../../redux/Actions/DanhGiaAction";

function Comment(props) {
  const dispatch = useDispatch();
  const [submitting, setSubmitting] = useState(false);
  const [valueCM, setValueCM] = useState("");
  const { user } = useSelector((state) => state.nguoiDungReducer);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(valueCM);
    if (!valueCM) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      dispatch(TaoDanhGiaTheoPhongAction(props, { content: valueCM }));
    }, 1000);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    // setValueCM(e.target.value);
  };

  const Editor = ({ onChange, onSubmit, submitting, valueCM }) => (
    <>
      <Form.Item>
        <TextArea
          placeholder="Cho chúng tôi biết cảm nghĩ của bạn về phòng thuê này"
          rows={4}
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          Add Comment
        </Button>
      </Form.Item>
    </>
  );

  return (
    <div>
      <Comment
        avatar={<Avatar src={user?.avatar} alt={user?.name} />}
        content={
          <Editor
            onChange={(e) => {
              handleChange(e);
            }}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={valueCM}
          />
        }
      />
    </div>
  );
}
export const danhGia = Comment