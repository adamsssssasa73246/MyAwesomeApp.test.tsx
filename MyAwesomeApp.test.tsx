import { describe, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";

import { render } from '@testing-library/react'


describe('MyAwesomeApp', () => {


    test('should render firstName and lastName', () => {




        const { container } = render(<MyAwesomeApp />);

        console.log(container);






    });



});