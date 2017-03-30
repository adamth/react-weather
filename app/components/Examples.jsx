const React = require('react');
const {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few example lcoations to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Melborune'>Melbourne, AU</Link>
                </li>
                <li>
                    <Link to='/?location=London'>London, UK</Link>
                </li>
            </ol>
        </div>         
        );
};

module.exports = Examples;