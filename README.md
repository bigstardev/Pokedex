# Pokedex

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project structure

-   assets (image,font, etc..)
-   components (reusable components)
-   constant (constant variables)
-   containers (main wrapper components )
-   service (data fetch from backend)
-   styles (global scss, like color, font, etc.. )
-   types (common types )
-   utils (common function which is used in components )

## Basic Components

-   [DropDown](#dropdown)

-   [Button](#button)

-   [Tag](#tag)

### DropDown

    Generate custom select dropdown component:
    - props:
        - label: helper-text (optional).
        - options: A list of {label:string, value:number}.
        - id: The id of the wrapper element and label (optional).
        - open: If it's true, the component is shown.
        - selectedOption: Active option which is selected currently.
        - handleChange: Callback function to change selectedOption.

### Button

    Custom button component. if those props are not provided, then default option is applied
    -props:
        color: color scheme of button,
                option: primary (default), secondary
        size: define the button size(padding, font-size)
                option: small,medium (default), large

### Tag

    Tag component for type of pokemen.

    -props:
        color: color depends on the type of pokemen, so classname is added according to the type name
        size: define the tag component's size (padding, font-size )
            options: small (default), medium, large
