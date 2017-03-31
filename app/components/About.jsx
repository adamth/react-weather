const React = require('react');
const {Link} = require('react-router');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>Use this app to find the weather in any city.</p>
            <p>Here are some of the tools I used:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react/">React</a> - this was the main
                    JavaScript framework.
                </li>
                <li>
                    <a href="https://openweathermap.org/">OpenWeatherMap</a> - I used
                    Open Weather map to search for the weather in different cities.
                </li>
            </ul>
            <a href="https://github.com/adamth/react-weather">GitHub</a> repository for the project is available here.
        </div>           
        );
};

module.exports = About;