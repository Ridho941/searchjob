import React from 'react'
import Navbar from '../components/Navbar'
import { ListGroup } from 'flowbite-react'
import { Link } from 'react-router-dom'

function Profile() {
    return (
        <div className='bg-green-200'>
            <Navbar />
            <div className='flex pt-[2.5px] '>
                <div className='w-80 pt-2 h-screen bg-white shadow-lg'>
                    <div className='top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center'>

                        <div className='p-3 flex items-center rounded-md px-4  bg-gray-200 cursor-pointer '>
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-800 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <input placeholder='Search' className='text-[15px] ml-4 w-full bg-transparent focus:outline-none' />
                        </div>
                        <div className='p-3 mt-3 flex items-center rounded-md px-4 cursor-pointer hover:bg-green-200 '>
                            <a
                                href="/llowongan"
                                className="flex items-center  space-x-3 rounded-md"
                            >
                                <img className="w-5 h-5"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABOElEQVR4nM3UL0hkURTH8Y+ui2LboqJiMxgswxaL6EYRk5o1GpURttkWNggGg0FQ7DLsgppE0S6y0bRp2A1rWIN/UEcGTrjIjOKbN+APDjzu+b3fl/vuu4d3pm/4g95mAY5QwVjewR0Yx0UAvmMor/BF/I/g57WPrkbCl5OwYxSxgG08xPoZPmYJ78RVhGzW6M8k8PksgJEk4HMdz0n0d7MARhNAoY5nAv/iU75Zn3AXgC1N0mqyi8PYVUuegDas4zEB/Y57MJwnqIANXCagKvQH+vIEtWMaewmojH5N0CRuArKTJWAQX17xrAXgbxZAOV6eesFTDM91FsCvZAa11uh/SG7yeRbAbHKQP2Nc96A7ng+S/pyMWsJtnVFdrXusaFAD+IpSElyK+VP9EXJVJappOo2DfT96AkiBX3BvzBC6AAAAAElFTkSuQmCC" />
                                <span>Payment Options</span>
                            </a>
                        </div>
                        <div className='p-3 mt-3 flex items-center rounded-md px-4 cursor-pointer hover:bg-green-200 '>
                            <a
                                href="/"
                                className="flex items-center  space-x-3 rounded-md"
                            >
                                <img className="w-5 h-5"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADyklEQVR4nO2ZS0tVURTHf+nNsm6RqUXqB6hpL/sCFWFNJKJJDyeZENWozCgnltNErUmRJI0qiPoAGRUNepEImZplRWoPB73MIowN68Jis++9ex+P3YL7hwWXs/dae61z1l6vC3nkkUccKAA2AE3ANaAPmAB+Ck3Is6vAMaBaeHKOKqAVeAtMB9Ib4DRQmQvFS4FzwFQExW36AXQCS/+W8juBjw5F3gHngV3AajFyrlAZsAbYDVwARh38H4Ads6l4Qt66ffAtoAYoDJS1FehxyOuQ9VhRDNy0DhoANsUgewswaMm+IWfGgoRD+S5gYVwHAEngksOIWL6E7TYnmD2ctM5qj+PChipv3uZx4BHwVeih5IhkBCO2R1W+1Io2xm2yYRUwkiFkvgJWesjpVjzvgZKZus6Ah88vBoY94v4LYFEWWUlgaCauVGUlqc0ePE1q/2egDlguVCfPUuuNntFpWiW7ihADWq0474PHimefY32/Wjd3wge3Fc8pX+ULrdrGJCkffFM85Y71ZWrdXGwfbFU8I74F4AarPEjk0IAEMKb41hPoy6a2IYIL1cfkQgYXFd9RPHBNMZjCzBfHrEu8V6LNIscl9lJEsEfxXcEDfYrBVJW+WCwhMo4wqrFW8fbigU+KwSSzEJgk9TKD8sOeiUyj3Cq5s0LH/yLCsVDc6QHwReiBxP4oBeA8Kx/MugFxY16oATNxodlAeagL6Uts2sB0mAM0AP3Ab4/La5Ph6ZeQa2Slw7rQS6zDqOlh06EhgtLpqD7DOXtDw6hvInseowHPMpzTpfYd8TGgWjGMZigltNtEaf3MtEK7kwtG7rjaZ3JCVhTI0ClbMfdd7YnSgC9Q/EaWC9uiFHPIxCzFaEYfLjxRew5FMOCw4jd1lAt31J6WEOGVEnNTzKa5sHFQrf+S+sYnbxTJXsOT4j/g2Fej1idDGxpk3JcSMOhoyE2CuWddxhH5ehuBFcB8oQp51urome+KLI2kVVe1EQGlkjhSQszcxpVkdNcUSj0ydrRxWe0Zj9rUI7NKfaAZebgixSErWmSjMeFJOOQ1W3trmSE6PIxI+baJGmeB+xKCJ4VG5VmntInp7kqzddYZYkBCxnxacLfnkMoXScttDF0PHBhnRLHDiKE00SkUNY5G6Hqcw139Jdod/nxb3CIkGyfE3e445LXF+eZd2J7mwo5JA75HUn6Z+HqR/F4rhVlXBv5a/hJK5GvoZBeVJuWtLyEHqJCJ2esIipuE1iIJL+cokKFTo9TsvdLZTQmZ309l7ag0Kf/E36x55MF/jj+gwS6O/MYeYwAAAABJRU5ErkJggg==" />
                                <span>Edit Profile</span>
                            </a>
                        </div>
                        <div className='p-3 mt-3 flex items-center rounded-md px-4 cursor-pointer hover:bg-green-200 '>
                            <a
                                href="/chat"
                                className="flex items-center  space-x-3 rounded-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                    />
                                </svg>
                                <span>Chat</span>
                            </a>
                        </div>
                        <hr className='my-4 text-gray-600' />

                        <div className='p-3 mt-3 flex items-center rounded-md px-4 cursor-pointer hover:bg-green-200 '>
                            <a
                                href="/llowongan"
                                className="flex items-center  space-x-3 rounded-md"
                            >
                                <img className="w-5 h-5"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyUlEQVR4nO2ZUQqEMBBDc4nK7v1vtAoeJ/szQhELskyqa/Og+FHhEWaIHwLmv+DNzs88LsjV0EECTyQZerUCr1Yy9GqNtlpsvJP95aaDjLZavaCDjDYRurVwr/rtBR0k8ESSoVtrtPrtBR0k8ESSoVsrcGslQ7dW4NYacbX4lD9WPHmWDImSlqMA+MTdCuCtkGRy5CiZIVqSbPaOkh3iSKKgdhRFiL1ExeaQhaglSjbHXD0nlURJXbErgJdaoj6yED2DLIp1MriQLx9G0dbbzPRoAAAAAElFTkSuQmCC" />
                                <span>List Lowongan</span>
                            </a>
                        </div>
                        <div className='p-3 mt-3 flex items-center rounded-md px-4 cursor-pointer hover:bg-green-200 '>
                            <a
                                href="/formlowongan"
                                className="flex items-center  space-x-3 rounded-md"
                            >
                                <img className="w-5 h-5"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABJ0lEQVR4nO2ZUUoDMRCGv6fSC9ijWNTzadtrWUpFFEShL762nkIYCUwgD4tJaxtm5f9gYKGBzMdMd7K7IIQQIggTYAV8ARYsDsDCc6yyDJCwVeKhReTgi2+Ix21RmSrZOrEB1pXr3liRX/PClOxj5XoUIhGxY0WiR5V/JxIVk0gwTBXpyBR4qgzbUVRk5Xu/jVlkDnx7XPcQWR95vx9qk3S8eQFmRUvtfP3yj/ldTGToTPbsv324TG6pnUt1ETkHM5dI+3wWLTU/Z369/iNXwHuxX3ryY4wiuTKvwLahpUKLnIJJpCNTTfYBNNnRZEeT/Tc02U9Ak50GdETphLWetfJnhfQKPxp3ntu+ZfEiwOtQq8R9i8jEZXJlIsXeJZo+vQkhhODS/ADYV9kg4Q0CZgAAAABJRU5ErkJggg==" />
                                <span>Form Lowongan</span>
                            </a>

                        </div>
                        <div className='p-3 mt-3 flex items-center rounded-md px-4 cursor-pointer hover:bg-green-200 '>
                            <a
                                href="/formkerja"
                                className="flex items-center  space-x-3 rounded-md"
                            >
                                <img className="w-5 h-5"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABJ0lEQVR4nO2ZUUoDMRCGv6fSC9ijWNTzadtrWUpFFEShL762nkIYCUwgD4tJaxtm5f9gYKGBzMdMd7K7IIQQIggTYAV8ARYsDsDCc6yyDJCwVeKhReTgi2+Ix21RmSrZOrEB1pXr3liRX/PClOxj5XoUIhGxY0WiR5V/JxIVk0gwTBXpyBR4qgzbUVRk5Xu/jVlkDnx7XPcQWR95vx9qk3S8eQFmRUvtfP3yj/ldTGToTPbsv324TG6pnUt1ETkHM5dI+3wWLTU/Z369/iNXwHuxX3ryY4wiuTKvwLahpUKLnIJJpCNTTfYBNNnRZEeT/Tc02U9Ak50GdETphLWetfJnhfQKPxp3ntu+ZfEiwOtQq8R9i8jEZXJlIsXeJZo+vQkhhODS/ADYV9kg4Q0CZgAAAABJRU5ErkJggg==" />
                                <span>Form Pencari kerja</span>
                            </a>

                        </div>
                        <hr className='my-4 text-gray-600' />
                        <div className='p-3 mt-3 flex items-center rounded-md px-4 cursor-pointer hover:bg-green-200 '>
                            <a
                                href="/formkerja"
                                className="flex items-center  space-x-3 rounded-md"
                            >
                                <img className="w-5 h-5"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC00lEQVR4nO2Zy04UQRSGP8cBJZmFCMYoW9/AUZ6BABtCWIrxGYwoC3AhLExMRHCnkUjAGDUxLlxLeAIJLhRYeEkAbxsWA24wlZxOKpUeqqu6prsn6T+pzEz3nP+cUzV9bgMlSpQIgRNAHZgEXgKfgD3gAPgH/AU2gNfAHaAfqFAAXARmgB/AkeP6DswCfXkYfhaYBw49DDfXAfBYOIPhgRDfj7k3BvyOMeQn8BS4AVwGzgOngQ6gV65dk+/sxMj/Eu4giHZWvUbokJ0yFX8AhoGTDvxVYEhkTb4FuZ8KOiGyk++M61tiRFoMAJsGt9LVFcoBtRvvjWsrQI1wqAHPY5zwPgmd6JHx+S6tw5ShSwUKLzSLGEpBqzFl6Bz1IYkz/oUkLJdI1mgSyWxYMqJbtyuBLXY3JIG5RjKXZ2IrzU8pSYLad4xkPtHpSEt2KusnxozFiSQnkNYBhVWNw6YvOEI4MKRxfM26AAzhQBXY1Xiu0mYOKDzTeCZoQwfGNZ5XtKEDdY1nPYnAJeCmvBbBgXNGyW3FF/ny54I4cMrIB1bo8b+zHR34own0pFBsy+RJE6LzT2hDE1BtoC+S9sv7Fp4rrg/xG01A9bC+sJUjSU/gumsYndQEnpA/FjV7biUR6NcEdkI02ClQlQFZZI/KCVZUZOgUCQ2SH4Z9i7lZTVCNPvLCmmbHPRfBPom5kbBqLrLGoPGwOzU0GEOszcBjFBtqwLamf86HpEcSR0Si5jZZYVnTu+fT1EcYy2GsMm3oHElLuJChE9OGroehYrE5F11qwWhx2dDx1nFgfCy6mgx3BwJFm+0Y41MNd5udxHxMPbMq0wOXjF2VJLUWwzcXcufjMGqk92jtSgM+Lim/V/qJTnlfl8Js8Rj5ETJCt5yGnux8V0N2/Qw5/sn3zcNwVduo8uACBUBFhk63pWZfl87uUJZ6/1HuTUiTUoi/WUuUoM3xH6jXruKBbPeWAAAAAElFTkSuQmCC" />
                                <span>History</span>
                            </a>

                        </div>
                        <div className='p-3 mt-3 flex items-center rounded-md px-4 cursor-pointer hover:bg-green-200 '>
                            <button
                                className="flex items-center  space-x-4 rounded-md"
                            >
                                <img className="w-5 h-5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZElEQVR4nO2ZTUoDQRCFv1WOkfi7nwhewIleSMWFa8UTxOQEuYFnMUESY7YGjQpuAiMDvSgGxCxedyzoD5rs3qvXM11paiCTyWT+OzvAEFgAa6ASrHXQGwCdmMWfAR+ion9bK6AXa+djF1+ZEG11gKExmAInQEukXeuUwMx43CNmYcTr4mNQGo+5WtweWNXON2kB38HjSy1u39GY3ACf4ddlgGjkABuyD1wABzh9AuPgsQSOPAZ4ND7SEKkCdEPh8hApD3EBvBq/N+DYWxcq1CG20UYLZYi/AtTt7xy4Eq9Rw3sZzok8wFOiq3YFTLwHGMcIsAdcA3fi9ZDqFXJ/iNUUntto4fmPrOv9KjHxfpmber9OHwKXwK5aeBttVEoOsCG3scYq7gdbLwlGiz3j8awWHxjxWTBTDndPG8PdPmI6Yeyd4rr8HmO8Ttj1VYLiSyLSDo93Lv7EVOv1Y+18JpPJkIQfKpKPLTg0kzEAAAAASUVORK5CYII=" />
                                <span>Logout</span>
                            </button>

                        </div>
                    </div>
                    
                </div>
                <section className=' col-span-4 px-20 relative '>
                        <div className='pl-0  transition-all gap-8 py-16  border-gray-800'>
                            <div className='p-10 bg-white rounded-xl'>
                                <div className='flex items-center gap-4 mt-2'>
                                    <img
                                        src="https://img.freepik.com/free-photo/young-asian-teenage-girl-surprised-excited-isolated-pink-background_74952-2590.jpg?w=900&t=st=1677461617~exp=1677462217~hmac=751528225d96d149accb3e39885833ba389a438d75b7ff66edb5e54ee7f400c5"
                                        className="w-28 h-28 object-cover rounded-full"
                                    />
                                    <div>
                                        <h2 className='text-lg font-semibold mb-2'>lala tau</h2>
                                        <span className='text-md text-gray-500'>aksdfjew</span>
                                    </div>
                                    <a href="#" className='py-2 px-4 rounded bg-green-500 flex items-center gap-4 text-white hover:bg-green-600'>
                                        Edit Profile
                                    </a>
                                </div>
                                <p className='text-gray-500 flex-items-center mt-8 mb-10 '>
                                    <div>
                                        <tr className=''>
                                            <span className='w-1/5  text-right pr-20 space-y-6 align-top'>Bio</span>
                                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                            </td>

                                        </tr>
                                        <tr >
                                            <span className='w-1/5 text-right pr-20 space-y-8 align-top'>About Me</span>
                                            <td className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                                malesuada ex vel vehicula varius. Nam egestas nisi ac ipsum
                                                commodo, a congue odio efficitur.</td>

                                        </tr>
                                        <tr>
                                            <span className='w-1/5 text-right pr-10 space-y-3 align-top'>Skills</span>
                                            <td>
                                                <div className='flex-items-center'>
                                                    <li>ReactJS</li>
                                                    <li>NodeJS</li>
                                                    <li>Tailwind CSS</li>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <span className='w-1/5 text-right pr-10 space-y-3 align-top mb-2'>Email</span>
                                            <td>
                                                <div className="flex items-center">
                                                    <span className="flex-1">johanna.stevens@gmail.com</span>
                                                    <button className="bg-gray-100 border border-gray-200 py-1 px-3 rounded-md text-xs font-normal">
                                                        Pimary
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </div>

                                </p>
                                <div>
                                    <div className='mt-8'>
                                        <h2 className='pb-1 border-b-4 border-tranparent text-sm text-gray-500 mb-2'>My Activity</h2>
                                        <span className='text-md text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

            </div>
        </div>
        /* <div className='bg-green-600'>
             <div className='w-72 h-screen bg-green-600'>
             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC00lEQVR4nO2Zy04UQRSGP8cBJZmFCMYoW9/AUZ6BABtCWIrxGYwoC3AhLExMRHCnkUjAGDUxLlxLeAIJLhRYeEkAbxsWA24wlZxOKpUeqqu6prsn6T+pzEz3nP+cUzV9bgMlSpQIgRNAHZgEXgKfgD3gAPgH/AU2gNfAHaAfqFAAXARmgB/AkeP6DswCfXkYfhaYBw49DDfXAfBYOIPhgRDfj7k3BvyOMeQn8BS4AVwGzgOngQ6gV65dk+/sxMj/Eu4giHZWvUbokJ0yFX8AhoGTDvxVYEhkTb4FuZ8KOiGyk++M61tiRFoMAJsGt9LVFcoBtRvvjWsrQI1wqAHPY5zwPgmd6JHx+S6tw5ShSwUKLzSLGEpBqzFl6Bz1IYkz/oUkLJdI1mgSyWxYMqJbtyuBLXY3JIG5RjKXZ2IrzU8pSYLad4xkPtHpSEt2KusnxozFiSQnkNYBhVWNw6YvOEI4MKRxfM26AAzhQBXY1Xiu0mYOKDzTeCZoQwfGNZ5XtKEDdY1nPYnAJeCmvBbBgXNGyW3FF/ny54I4cMrIB1bo8b+zHR34own0pFBsy+RJE6LzT2hDE1BtoC+S9sv7Fp4rrg/xG01A9bC+sJUjSU/gumsYndQEnpA/FjV7biUR6NcEdkI02ClQlQFZZI/KCVZUZOgUCQ2SH4Z9i7lZTVCNPvLCmmbHPRfBPom5kbBqLrLGoPGwOzU0GEOszcBjFBtqwLamf86HpEcSR0Si5jZZYVnTu+fT1EcYy2GsMm3oHElLuJChE9OGroehYrE5F11qwWhx2dDx1nFgfCy6mgx3BwJFm+0Y41MNd5udxHxMPbMq0wOXjF2VJLUWwzcXcufjMGqk92jtSgM+Lim/V/qJTnlfl8Js8Rj5ETJCt5yGnux8V0N2/Qw5/sn3zcNwVduo8uACBUBFhk63pWZfl87uUJZ6/1HuTUiTUoi/WUuUoM3xH6jXruKBbPeWAAAAAElFTkSuQmCC">
                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZElEQVR4nO2ZTUoDQRCFv1WOkfi7nwhewIleSMWFa8UTxOQEuYFnMUESY7YGjQpuAiMDvSgGxCxedyzoD5rs3qvXM11paiCTyWT+OzvAEFgAa6ASrHXQGwCdmMWfAR+ion9bK6AXa+djF1+ZEG11gKExmAInQEukXeuUwMx43CNmYcTr4mNQGo+5WtweWNXON2kB38HjSy1u39GY3ACf4ddlgGjkABuyD1wABzh9AuPgsQSOPAZ4ND7SEKkCdEPh8hApD3EBvBq/N+DYWxcq1CG20UYLZYi/AtTt7xy4Eq9Rw3sZzok8wFOiq3YFTLwHGMcIsAdcA3fi9ZDqFXJ/iNUUntto4fmPrOv9KjHxfpmber9OHwKXwK5aeBttVEoOsCG3scYq7gdbLwlGiz3j8awWHxjxWTBTDndPG8PdPmI6Yeyd4rr8HmO8Ttj1VYLiSyLSDo93Lv7EVOv1Y+18JpPJkIQfKpKPLTg0kzEAAAAASUVORK5CYII=">
                 <a href='/' class=" bg-gradient-to-r  from-green-100 via-green-300 to-green-500 bg-clip-text align-middle text-3xl font-black tracking-widest text-transparent pb-4">SearchJob.ID</a>
                 <ul className='pt-6'>
                     <li className='flex  rounded-md p-2 cursor-pointer text-white items-center gap-x-4'><Link
                         to="/"
                         className="flex p-2  items-center space-x-3 rounded-md  "
                     >
                         <svg
                             xmlns="http://www.w3.org/2000/svg"
                             className="w-5 h-5"
                             fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor"
                             strokeWidth={2}
                         >
                             <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                             />
                         </svg>
                         <span>Home</span>
                     </Link>
                     </li>
                     <li className='flex  rounded-md p-2 cursor-pointer text-white items-center gap-x-4'>
                         <Link
                             to="/llowongan"
                             className="flex p-2  items-center space-x-3 rounded-md  "
                         >
                             <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="w-5 h-5"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                                 strokeWidth={2}
                             >
                                 <path
                                     strokeLinecap="round"
                                     strokeLinejoin="round"
                                     d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                 />
                             </svg>
                             <span>List Lowongan</span>
                         </Link>
                     </li>
                     <li className='flex  rounded-md p-2 cursor-pointer text-white items-center gap-x-4'><a
                         href="/chat"
                         className="flex items-center p-2 space-x-3 rounded-md"
                     >
                         href="https://icons8.com/icon/95645/list-view">List View icon by Icons8
                         <span>Chat</span>
                     </a>
                     </li>
                     <li className='flex  rounded-md p-2 cursor-pointer text-white items-center gap-x-4'><a
                         href="/favorite"
                         className="flex items-center p-2 space-x-3 rounded-md"
                     >
                         <svg
                             xmlns="http://www.w3.org/2000/svg"
                             className="w-5 h-5"
                             fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor"
                             strokeWidth={2}
                         >
                             <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                             />
                         </svg>
                         <span>Favorite</span>
 
                     </a>
                     </li>
                     <li className='flex  rounded-md p-2 cursor-pointer text-white items-center gap-x-4'><Link
                         to="/formkerja"
                         className="flex items-center p-2 space-x-3 rounded-md"
                     >
                         <svg
                             xmlns="http://www.w3.org/2000/svg"
                             className="w-5 h-5"
                             fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor"
                             strokeWidth={2}
                         >
                             <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                             />
                             <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                             />
                         </svg>
                         <span>Form Kerja</span>
                     </Link>
                     </li>
                     <li className='flex  rounded-md p-2 cursor-pointer text-white items-center gap-x-4'><Link
                         to="/formlowongan"
                         className="flex items-center p-2 space-x-3 rounded-md"
                     >
                         <svg
                             xmlns="http://www.w3.org/2000/svg"
                             className="w-5 h-5"
                             fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor"
                             strokeWidth={2}
                         >
                             <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                             />
                             <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                             />
                         </svg>
                         <span>Form Lowongan</span>
                     </Link>
                     </li>
                     <li className='flex  rounded-md p-2 cursor-pointer text-white items-center gap-x-4'><button
                         className="flex items-center p-2 space-x-3 rounded-md"
                     >
                         <svg
                             xmlns="http://www.w3.org/2000/svg"
                             className="w-5 h-5"
                             fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor"
                             strokeWidth={2}
                         >
                             <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                             />
                         </svg>
                         <span>Logout</span>
                     </button>
                     </li>
 
                 </ul>
             </div>
 
 
             <div className='p-7 text-2xl font-semibold flex-1 h-screen'>home page</div>
         </div>
 
     */
    )
}

export default Profile