import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withChangingForm from "./with-changing-form";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withChangingForm(MockComponent);

const mockEmail = `kate@mail.ru`;
const mockPassword = `12345678796`;

describe(`Change state after form changing`, () => {
  it(`Should state changing depending on form change`, () => {
    const wrapper = shallow(
        <MockComponentWrapped/>
    );

    // Изменение email вносит изменения в стейт
    expect(wrapper.state().email).toEqual(``);
    wrapper.instance().handleFieldChange({target: {name: `email`, value: mockEmail}});
    expect(wrapper.state().email).toEqual(mockEmail);

    // Изменение пароля вносит изменения в стейт
    expect(wrapper.state().password).toEqual(``);
    wrapper.instance().handleFieldChange({target: {name: `password`, value: mockPassword}});
    expect(wrapper.state().password).toEqual(mockPassword);
  });
});
