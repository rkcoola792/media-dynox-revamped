import React from 'react'
import { Link } from 'react-router-dom'
import { Item } from '../Dropdown/Dropdown'

const MobileHeaderDropdown = () => {
  return (
    <div className='-ml-2'>
      <p className="flex flex-col gap-2">
        <h1>
          <details className="group">
            <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
              <span className="flex gap-2">
                <span className='text-2xl '>Services</span>
              </span>
              <svg
                className="w-5 h-5 text-gray-500 transition rotate-90 group-open:-rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                ></path>
              </svg>
            </summary>

            <article className="px-0 pb-4 scale-90 -ml-4">
              <ul className="flex flex-col  mt-1">
                <Link to="/marketing">
                  <li className="flex gap-2">
                    <Item
                      subheading="Stay ahead of the competition with us."
                      title="Marketing"
                      img="/marketing.webp"
                      color="bg-red-100"
                    ></Item>
                  </li>
                </Link>

                <Link to="/technology">
                  <li className="flex gap-2">
                    <Item
                      subheading="Embracing the future, starting from today."
                      title="Technology"
                      img="/technology.webp"
                      color="bg-blue-100"
                    ></Item>
                  </li>
                </Link>

                <Link to="/business">
                  <li className="flex gap-2">
                    <Item
                      subheading="Empower your business with industry experts."
                      title="Business"
                      img="/technology.webp"
                      color="bg-green-100"
                    ></Item>
                  </li>
                </Link>

                <Link to="/design">
                  <li className="flex gap-2">
                    <Item
                      subheading="Don't just sell, fascinate your audience."
                      title="Design"
                      img="/design.webp"
                      color="bg-orange-100"
                    ></Item>
                  </li>
                </Link>
              </ul>
            </article>
          </details>
        </h1>
      </p>
    </div>
  );
}

export default MobileHeaderDropdown
