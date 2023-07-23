import React from 'react'
import './MoreDetail.css'
function MoreDetail() {
    return (
        <div>
            <div className="more-detail">
                <div className="more-detail-head">
                    <h1>Pasta</h1>
                </div>
                <div className="more-detail-img">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxQUExYUFBQXFxYYGRkdGRkZGBwcGhwZHCAcGR8hHyAhICoiGR0nHxcgIzQjJysuMTExICE2OzYwOiowMS4BCwsLDw4PHRERHTInIicyMi4zMDIwMDMyMjAwMzAwMjIwMDAyODAwMDAwMDAyMTAzMDAwMjAwMjAwMDAwMDAwMP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xABFEAACAQIEAwYDBQYEBAUFAAABAhEAAwQSITEFQVEGEyJhcYEykaFCscHR8AcUI1Jy4TNikqJDU4LxFVRjwtIWRHOT4v/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAQIFAAb/xAAxEQACAQMDAwMCBQMFAAAAAAABAgADESEEEjEiQVETYXEysYGRweHwFKHRBSMzQvH/2gAMAwEAAhEDEQA/AHE6H/EM9NtPnFeG5ofCW35/dpv71T4liQcqAhZiTMb+fIClbi2MNp81m6T5z+ppSprVR9oF7SEoFhe8ecPeZtPRdTqIGp84/CpTZGijp8ood2Y4kL+HVsuo0MHYr09d6K2XDLmA1mP18qcp5QG94FxZiJXu4WVYdQf186Vb+GHMU8i3EdedAb2EA+n3US15W9osXsNH51C7ONZmOoB+p1o1ew8nTlvVa9gtKqUvLb4LPELi/ZHsWH41o3HLg2B/1/2q7fw8DUUPvWNaGaYHaWDXnj9o73Rv9Z/KoW41cPL5kmtb1raRWos9KjYJN5pext08wPQT981Wl20LE+U6VeNioVtwanbadeRLZive7q4B5V4bVW2yLym1uvLVurDjSKjy1W0m81v4cMIImh9zg9smYopE1tk8qtOgR+GqNlqs+EynQfl8qYXsjmd6ibA+VQbyYBw+Ja2dNh9k6j26VftYy258UKT129jzq3c4VzjSq1zg55bVdazLzKNSVuJl3DhjA1HzrLvDrVkfxnKnful1b35LUyIcJa70n+JckWl5Ko0ZvWZA9DS5fvlySSSTzNLVK5qHpwO8NSoBctn+d4eHaYL/AIeHt7QC8udPUxUOK7RC5rdw9l9I0UofYqRQhRWlxKFa/JP5wwVRwB+Uv/vGF/8ALN/+56yhsVldt9z+ZnY8D8p17tJiYEiZ2MfhSriMFfvFRbVjJnQHUciD086LYy+TvTJ2HLwyMSE3UHaeYHtrWbpz6tTq5hHOxMS92U4UcNZVH1YyWjkTy9qY8NYUfDB56cpgVouFJ3239fKrNq2dDyE+52rfRQqhRM83Y3Mhv2gFPX8aFX7OnvRXFvPh6ffVZ15Va8qRA1zDL1k9KGYowfL9aUw37WpAE1VxmARBnvXFtJ5xmPkBUl1UXJlAhJwIvET58vQ1qvB7tw/w7bOPIafPYVduccw9vTD2M7D/AIl78F/7UOx3HsRd+O80fyp4FHpGvzNLtqh/1F4wumbubSa52WYa3r1izz8byfkNPrWg4Xg1+LFM/wD+Oyx+skUOQDeNevOpVHXSheq54xDCko5l428D0xTf6F+8V53OB/5WK/1W6gtp5ipFt+Yqbue8ghB2kv7tgT/5pfZG+4VoeE4RvgxeXyuWyPrpW6Yc9Qar4dyzFWGoE5fLb3NQ1R1IG7n2kqitewm1zsheIm09q6P8jwfrA+tCcbwm9aP8S06+oOX5jSjJwQRRczZSQWAUEHykg7zyrfg/aS6SQtySNClzX5Hp7UGlrfUYqBe0K+jKoH7GLKrUyYaSdabrpw13/Gsmy386aL9PD8xWp7NR4rbC6nlo0ek606lVGwcGJurL2i4uFmBE+cVescMO539ooomDidCCPLX01qVsw1IhevQUYwYJlCzw9SNtD5VunDhtl9+VEHWN4jzNWFGmgoLQgnKf2iPOLNv7NpEQewk/Mkn3pdFM37RsMRjGbYXFVpO0gZW+RUilpBEBjExPWOvnSlPKiOEzayM09ZESRr18yfIVPZwmYgZgokyTOgHOOYjXf++2ERRAUhmLEgx4lA+ErOzTrz0ijd+wjO2U3ZJGkqbkOrKFymCIIIjWNNJq5IlMwV/4ef8AlN/u/wDjWVd/ebP/ACH+d/8A+dZXYlbmdSxPZMFgdCJmDMge1H+A8GWyuwLEyTrtroKnS4zMNF9gfumrVm4SSJA9P0aKmnRDcCBNQsLGTZhVbF4qFMbDn+VSKkyDrQDtVi8pW0N/ibyGuUfj8qNKmW7N6a3v31USxigFzifdW8ze1LmOxz3iS5OX+Xr6/lQKlXbheZanSLZPEPcS7WxK4cDzuHb/AKRz+6ly/fZzmdi7dSf1A9K8qK4+lLG5yY4qhcCa3Lkc6y3cnaoLV+LikqGE7EAg8uelEnNq6nfLc8ROqZcsR5biJiaC1YI4BGPMYSgXUkc+JGknnUi262sgVMYrQVBa8SZjusJCTsAJJ0A6mpOJXRhyqnV/tc9TsBV/BWBaU3nHi2UHkN5/XlVfguGW5dbFXQO7tHwAic1wc/8ANEj/AKmHSsarrSanScL/AHmjS0q+mS4z+sjTF5XW2w8bCQv118/KhPFsXkM25V0Yz7mf7a1Y4rxC1bd7sMbsaBj4U05RrMUt4TEuc9x9S3XXf+34VyVqtQbm4/X29oyNKiW2jPf4jijtkU3DJJ3AgKd436GajxvDgRmBIYfCRy9dfp91WezpOJw2XMGYsCeUFVjeK3VHWJJZNhImDMxPXX7qzqjslQlTY3MYUAptPbkSLhnFTm7l9G6HYjyPOi9mxlM2mNtug+E+q7e9A+MYEXFBEq4+EzqCNR686K8Ix+YZX1I38q3NFqV1C2fkTG1enNHrXgwmvEJ0vrlPK4Nvfp71M9mNdx1FYtoEdRzFQpZe3ra8Sc0PL+np6fdThD08jI8RLofnBkX73bclVJlD4tNJjY6a78qssRGkfryqK54wSh0+0p3B9KgtCYjQ9NfOrq6uLiDYFDYxY/aPwg3rZKjxpLp1ZdBcUdSID+firn62wULEqYy9OfLp0612jG4A3RDNodQQBKuNQwP0iuecd7OvaulkhXM+EHKlwHQm2fskgmVNLsDTJvwc/B94dG3C3eBsCcp08THxINfsjMNQOo38jNTY3GKzd6VF1/tMxIZmPXSIykHYCY6GoUcKzZ7fiJIyEZQMwYEgw0QTzPMwRVrC4/LbHxOQFhTqcqkkLmjUEwSJXRec1FxL2Mh7/Gf8k/6bf/xrK17/ABH/AKfz/tWVNx7SNpn0HbwZzBtqsrhwDJMVDbwrjXvCBPPn85MVKABqfrp+vvp6KgTY3lVSdYHlv6fnSdxAh7j3rhhBqfwAo1xTG5wVEAc/Tr/aknjeP71si6W0/wBzefWl6tTaLDmXppuPtK+OxZvPmYQo+Beg/P7qgevT9a0IpYCOcCRu1VcXi1QgNOvQTHrXuLxSqDJ16DegT3m8RYzI021nQegiodrYELSpbjc8S5dx8jMBAG8/hTBwrLcRmAHigmPPX7j86XeDcMZxl+GZZdJHlpv9aP8AZvEWZNoEq2bWfDOYgbAACJzdIBrO1PWMZImpRUIJljEJbZlMsNCP6juPTn86YOA2heBLWyiqRJJkHY6ddxypbvqG2MQdCD02M/j6VYucdfuMqgKA2U+Iyec79Kkaqr6WwfEDU0iNU3jky5xTHi/fW0FbuwRIUA6A6zqAB1M/PQVa7V8UNkCzbCBIHhAzENyE84nl9ap9m8R3Nk3ri/4jAL6AafeTA8q3sX7So2JuAks0W85BMaSVHIzIPPl1pMm2LXt/c+IwF6hjA4+fP4QKnZ97n8XEHKu+Xmf6unpvQfjVxFOW2NPLpTV2rxJtiHcKYBCgZtwDqdAN4+dKIwmYd/dJCye7UbuRv6IOZ57Dyb0wdup+PAgdRqFprnv/ADEP9jb72bTOgBQtsToCfDJ/KmW5buOmpmPszAn2G/4e1JHFLNzKIhM6q5VYEEkwNPKG9/SmzszxhQFRhuJ3kztB/X40HWICd648yNO5amGHPPHbxJlBII+0AQG6SI3pfPFVs3chJziJ8xTjxRSqMbbAEjMyxI8MkTIjz/QrmmOUXGF0kl8xDctgII8on0jzquhUq26/H3/xLMVdCCMHtOncKxauARHkaLIk7b1zPgvGXtKIGgIEdV8jyPrpXReE4lbihlMqef62PlXoqVZKnHMwq+nelk8SS7hJ8S+FhzHP8xVUAySBDA+JdIPmv9/Si4SagxWGnUfEPrUuljuXn7watcbW4lK08idP7/rlVHjmBW4uVgCKsXiUJcbfaHT/ALemo+u95gedERhUEGylDOc8V4aySIDDkHGaB5E6ihD3AP8Aggehb866HxXBgjaljF8N30mg1NMvIEMlZoB/eB/y/wDc1ZV/9xryh/06y/rNOsJ2nJEd2o+p+taXuKM/OPSh92xyOtTYHCEuqjmfpzp2KXvK/aC8bdga+K4YHpr+GvypZtgD0FFu1uK7zEFR8NoZB67n5aD2NCSaQY7mJj1NdqzZtKhxLEDSJ03Mac6lPWlvEX277xkgyY1iAOny+tQx2iFprva15rjsFcuOYRiWMQo1JMR8+tM/Z/sMo8V58jDdMpOXoCxgTtPqNaE4HjRRgx1kywA1jVTyjNHtV292xDNmKlVXQIrGCk/C3Webbz7Uiz1DgCaQpmwAMZsJwKwxVSjFS06SMsjfw9PPoKocWvZz3VqwtwZvtiDbYmOYl2gx7GocRwsG131m47rdQm0oBDQdYc841BjyNb8HuXS1sX1K5iZKyO8+ERdHM5VME8+hNLrTK4ZsiWuPqGfb3hN8LbdWF6Euho7zMcuZoKhlGwMnUREeRpV4rbfvwt4uLaXMpUDwiIzBQIBMR6ggmZmiGN4XdYLatqbdtLkuSfFdglTyaCqAgLtMxM1Ph3sYr+GNWsjQu3je3CiZUwzrlAjmADuCKKqAcHP85kbyM9vt8SzxJEuWDbLZfGO7aIgkgAEaDfQ7aTtU17B2TBdivcC3qcvdgTBgQTMmcx01r3geEOJOZkKIpYIGHiYoI0B1gwQTA5jrUuOVFtZrdpWuOrq2hZCDoQwB1kMAZEa8opempU9QxmS7j6VOf8xD7e45b91XS9auJrK2yxIiImVAjzG8GhvBsG95xmnIurHoi6mPYU68E/ZxZ7kG87i44MaAqumk7QfCdzzoLjQ6h7Nu09uzIDO0ZzqYnLIVSUOgJzRvrWkpXZ0nEx9QtV6m0ccX8CTX8EbwN46EGCCTlhfCABtIgDTpQniSXbDsUCi5C6yCVG+h5TzHORVvgnGTaLrmGq6SFkN0M76rNUcl1mbPprmZ9+arp8xpQlUhrniPK5RNnFuI88B4ncxWHdLZh8oUjToNNjv1+6DXMbZcG5ESrHQbMs5dPMR7yKZ1vPhkuG203biFPBOQAgyOZa4CdYgDNGp2XsYpt3Uuxv4XA1EjwsPPafaj6fThN3g8QL1ibW5/WOPBcKHsaqQ7QV0YhUAJJ2JjUe31KdlVu2b1sB5sXVLEMVBDCYABbMYHQRBoD2b4otu5csMsFhKMpIMGTMyJ8QUdYmr3ELXdAXhALGAu0r+Q5a0qH9CuLxnb69IgTplvUTW+WaQV7U3VtpHw7CGA8Q6kg6flTdwHHG7bGd1N0AF1B+HNMeux1rTTVrUqbAPxxmZdTSuiBzxMx9mPFy2YeXX2oHiT3L5fsn4NOu48gN/T0psdaBcVwMoyfaTxIfL+23p61Zr03DDgwQ61se0Htckeesc6GYzCtA066xoaksX9ht7c9qtLg1IkaMYnz5jb+mmybxfiB/8Aws9DWUU/c2/y/JqyosPEm8N37XnVrh38JLt5traH7pP3fWtXH68qg7UXAmAIH/FdV9pk/RKpUayEyaS7nAiSGJlm3Mk+p1P1NeZSa3ra2p6aczO3SklHaaLSrjsWttRPU6D2qthnw93/ABibcfaYb+hgyah4s573LI6idp0Ptsapol5rhs28zE5oVRIZ9hOsLBBJJ256UMudxAjFLTgqGJtJrnDXN0KlxntlvBux2jaBrBMRTT2U4FawyM95VLXBlYEmFTeD/MxYDTQCN694LwsYdUW5cW5dJJJQEkCPFH+XWM3ORprUDYs4mUBy/ZAA1MyRI2iBqazquofdZeO5jtOjuHUcSv2p7UtGS0uRVnxZhmjQQBvHhFa9ksQ11mBLOoyCZkjUHY79PlNbXOx4F0G9cQoWlkDGXiTGhBUEjWDPpR3huDsYe0TaXIgDeNyDLGYEnVjrERO2lUd027Vyx9vvCFlUWUYl5uG27jK/eEhCpcHQFhEMxBBaIiOvyrc4UL3ipbtorMQrLbVtWkEspMOAQQfh0HtS+O0Ki/asqwKz/GfkSJJVf8oAjzPKpOBY17r3FuSQzsVyqsCXW5bYtGrMwkGdmn0YpUzYFv2idTcMX/8AIRtcHxNsP314MilWBtRb6n4V2Ajbz9artfdluZCA7Q4M/wCJbQyzAfzQD4h8XmRRQXrRR7t14V8wUAlhAkCCBGbWdRGYkTtSPxLC4m34ReBRw4sHTKbTKpCoSAqhwVGp6zECrCmHYm+OOe8jfix+0fuD45bqcyj5irROYTLAE6EAAj8qD8V4fZ7sBnAVhmUNoxAJM5EBG0wZ12jWaC8H4bdwsOxzv/EJXOpXKRnaTyOVCOa6/Jleb1tLotsDcjU5RoBruQWjkByFBbdTwBe0mwJuDYGc64vwa/3z3oF1Sfjt+IEjWSqgMNPKNOdEuH2jdtiADA18LF8wIjJAgDUctN6K3+IdzdD5hBIWMq+JSMusSIUgRM+m9VuHsVZ8hupbLlg/wgTAkmNpYdY05UVa29ciS9KDcZxEo6szvJuqQ1w5j8OXMWI1goNxz9ap4nh02nBYZwxOSNRA1J6z/wC0mmniGLs3o0QlHtlrgQkgzmgnwq8qDpruOta4zh6BreJQBbTt3Qzg/FnHxbkqbcifUc61KNVKgsOR27zLq0nptdsA9+3tE6zYZrSXlBzWmgx5bD3XT1Bo9iOJWblos4YkEBZbQf0iInQ/SjOA4EmFxl+w5Pd30/hN9mZDox01II3/AKutKPafhd5CqvKprC7DNuduu8+tD1WkLgOe3PxGdHrFVynY5Hz3EK8Nxi3GFtFJBIhXaBmGmu2lMXZLFLYukvCo6a6bkGQRHIeIR5+VIuCsXLQBIbTUHfbU7cqNcOw9y9aa6GGRXAg6kmAQZ56mMo86zj0MHQ8TR6XBRuD951q04ZQykFWAII2IOoNVsckQ/wDLv/SdD+ftVTsdZZcHYDGSVzemYlo9pj2otdSRBraI9Sn8iefPQ5HgxA41Z7m+wHwt4h+P686jt4qA0zygCP5l/CaJ9s7ELbufykqT9PypatX5P/f9GupNdbSrrmMX74Ov+3+9ZQz95H8x+v5V5R8Qcb3xCgxVLt60WcMvUlvkv/8AVTXMJqTMb9P1NVu3ywuG6ZW+5aDqPphNN9cVKnWABOn66b1AecGK0u423bMbt05/WlAduSbR4qWwJX4pwu5dkWlBOm4ynLzGpienlUWLtNhbapbUDMB3jaF2PMMQSRz0Bij+D4raMLmyMxAEx5a6T6a1dv8ABUcMWIjeF1c/Sd6R1dakCAue58fvH9J6if8AILDt5nN7eLuAOzuS2w/tzmmPs5jrTXkuMdLdoswgrLqsR1JLNvRzD9m8MGDuDqT4CfCAIPOTziNede8f4jYVXthQVGmWDAHl+AG2tLNXV/pX+fEd37ztz8xT4pxnNooCiTrzOs6/n51qGxN9Ua2rOoGkH+UfIHTnrVd2Rb+bKkKYy6OjctZkR58uWtGeJ4ywjo5xL5TBhVFxMoOiL4lygDTbkOlNJSUL0jPvA1KpDW/vzFLhtxlxK28SbloTqoteIsxCxBK5QcxOby2O1dcw9633WVLdvuQsEFSSuUAAtl1iABIIj2pC43xnD37ao2Kk2zmtL3LeErsPiIMxrO9GrPEMUt+2UW4qzbYgA5XtvqW0GukkjeT56XrlunG3zF1Tdck3Pabdusct5bZs3oGeSkeEvbM9AftBo9ekhc4JjL1y6qWUuNrBVRKOp3zIdF1EgnbWmLC4i2HIuZcjFmYASCRPxK2x2gqRGmvQ7gVtPajDsmHdyFzIMpZo0mfG/kM0aHXQ1ak6Fcc/r+8o4ZcEYlnF8MVStvKgGWfiCE5fE4K5CCpBIkZTGlaWMTdu+G6VuDNkIVCoEC4uVkOqSxBDbErp0qLBcLu2CzX7huu4yuwLQIJIOUnwxO+u0SaGnFWi10WbpS5eSHxMRccagCfCoC7aQ3hGukUJqgO5WuP59pRaZ+pczztnYwy2ksSE1zhbYGYHQnKDABbLEkjU+1KnDMVeNsqO8dSyknVoVZggddT7aedS8VwF4yL2UMiC3acQc6R4TsCRJ0J1BzDnAEYW+rqM7G2QI0UlTv8AEAQZ84NXRAAQDf8AeGFwMxx4VirbZ8s5MrFRzygHUfy9TAmM0VL2aUd+cI17Mly3nZNCFZCCFBBjvIJJI2CxryCcKw5XMoxFoJlz6EqSNBqWUHL899qn4XiktXkurbzlA0jNlzBlZNCQdfFMxyjzqlEijUDHi/Mmshq0ioN8cfadExeIsoozHMVWF2nypJ/aLxO09oZRsUg+8fcT9avHE2b91rNq4HuiCbTaMQQG8B+G5HkZ0OlLHavBsqrOoBBM7j7I+pHzrfqMppErnE8/RUrWUNjM9N+UyIpLPlHVp2CiIABJnbpTdZwXc4W1ZABfZo5uSGPlIaNek0lcLvgOjAGVYanWJ0n8qcuJYYk2rNtybt0KQw1ABBLMeukkbHTzrzLgkFQOZ6U2uCTgZh/sFiS9m6p17u84B5QYfT3Y/OmIiqXZ7hiYewlpDIGpaILMdST6mrzNFb9FNtNV8CYFZw1RmHcxf7WYebF3yhh8o+8Vzqxeg+hrqfG1/h3P6B9Ca5LZ+M9J1qiYciQ/0gwz/C6t/pP5VlU4Wsou0Qd453gwEAxO0EAamTy1MVv23GbD4a56D5oT/wC2iv7qX8RCnoWA5VB2sws4Mgf8Ng2nQHX/AGk1FfKyaGGiKN6DcWsibpAk5hlnTWNQD6Hb0o2o1FL/ABa9LsHVh4tYPLSI5g+dZ1b6QPebGlHXf2gq5fDXLbKs5YzBtVY7xHTkR6048M41cW0y3BrrHhUjVGyyT4pGYRrFUuDcD70rK7NEAatA1E8oMVc4yxFor4T4h3ZU6gAa+3lSNWqpIQCaPp3PMt4PjG2oMaA+nrWnEuCd6TezENczKAdQGAHijQzB01idYpLbi4BykEHbTUT5dPSpcTxgkLLOAORkCZP6mqLpXQ3XF5xNpZxXYy6uY9+uYCQCsSZiD4pG/IGrXDezJa01q9cthdMjjNKsxiHBEFCSJgyJnrA67xRnYOTsBEbaCNDzFGsL2mt28O6FS90k6nUCYghgZEQdI570yr11tex/C0FURWGCYAPBXw2IRb9kKFubvIVhp8LD4tDIPpI3FdCxVtrtk3LDF7gYBGUxA0GVxrlAAMxppuaV37SLetPZv2Q6BBkPNW0AZDEK2pBHqRzq9inGGsZgFRu7txkLTnXd2BY6nUxykcwImswYLu5vxB00a+Pz7So3HEY3bARA3gZbjKA1yCCd/hV5YjTTwgmKs8N4q5zW7Kd21oSXbxGQwVZBEBod1AA1L7UI7P2Xxt5AcL3ijNnv+JVUb6t8DTtDddCKvdr8L+7m9cthnstbCMV+FbgK5CxmMpM5T7cwKuUXeFtyJRnwfmNa8RumwqvilsX0IhmKvnnXIykAqwH2twN51FBFv4K0zuuKbNnYlrCEAhtIJIW2SSATvz01pFscQZgEJgkkgeZ5x7Ub4ZhwUsJlL95mLjUAJLKTIOnwz7Ua1xZu0R1VX+nXeubm1owYPtfZuuLK2i3d5srt3VvTWYARlG8xoDHrMXFcLbW6bAw1rx289t1MMzHUZtCqEzrA67jUZwgYaxbWbo7zOIOVpXWCZXbTX5Gi+NwNwlLiHvVJPwiJDDKRKhWQlesbk660BquxxbIl9PVGoTda3PfvOdYtNICqjACYzRvrodR0irOG4gVjNDKBoDsAPuqbifGrV286d2YLNBPxSJmSPfWKGLhnLlFBYxoRzHWdhUkFsMI+HCjd/BDOJxQNtYBDo5dXRjIbwgFfQrM022GHE8KbuUfvFnw3lGguoR8Y/lLCdeTA9BSPbwbI3dwz6ScqnKCeWb7Ufn50a7GXr2FxC3ipFv4bin7VsxOkySPiHmKJQrCi1mOItqaPrIHQe4IgixjbmHe5b7vvFOUzHxATlYecEgjrIpr7A4tr2LUm2QAr7zABHn56R5mrPaLAixeYhA9ph3lsg6ZTqwB5yJYe/WrvCO0+HQDIjRERIA+6atVpUaVUOxsORzB061etRKKL9jxHpFr0ihfZ7j64hmUIRlE5pkdIOgg/kaKtT9OqtRdynEz6lI022sMwfxcfw3/oauPbO3rXXu0DxZuE8k++uPM2poY+szm+mWM1ZUeYVlFvBzsVu5W9y0LiPbOzKR+B++hmExMiau2r0EH9RzqzrcSFbM5+LBUkNupKn1Bj7xQy6wt3nZrau8QokbkGDGs6R+Ymm/tXgsl8sPhuif8AqET8xB+dLnFRBnmQAo5mRqY3PL01rJ1PSvwZs6OzP8iCsNxbELZ8Nttz3bJK5STqQR8RMeYqk1rE3b2UhxcJIy7NzB/p0maaOy4Tu2VgcqkqsrA3kka6RI19atLj7VpzlTM8a84cx7kTOnOKQNYKxAAmiQ2QsB4Psraw1s3LxD3SfCN1X+401Pt5iuI3AJYFYkjaNd9oq32i4ywZlZyIMnUHUiOW/SltXe9MA5Z08z+dGpK79bmc3SLSDiONnUGTMfLf7xVG2rufDmk9NzV88PuFsioWadNNjt89KbOE9mbNornD3LjJ4lIBSd/lpyM7c9KdNVKaxZg2WPEBYPguJW2c1u4blxlFtGBBC7tcIOoX7AO0k9KZuPcaSw6pasq91VGa5eBIDEa5bc5ZkxJmi7NazIMmUEAAjQwsEREAKIEdPORQviXBUzKWuaM4VfDDBpMS0wdomBGmnKgs5ch9uBeI09fp9xplrk/NviFOwLYi/nxF+8LighVTWEZdScoXKggjQRPyrztUtpiTcttctyQ6pcbKJKm2zqutsMSYn+UEDSjNlP3fBkTLhT8UE5mnU6bfnXOe0PFL5Vld7gDBV8I/hso+EHygkjUzQaT+pV3RsISCRxxKfC+zz98TkIyySVBZQD567A8zy1pz4pg+5QC1fW2ShzJkTVG0ABIhQpVhvtAmlPhzvcVbTw+XQAyHA0mCd4HLfTnRDB9sAGK3hJJ0M6hIXw6jUSgMxvmkdGnZiDbMC1FXID2glcKz3bYt53dpJLQNOZY7KoAJnYDUxXSOB4pRa7u2e9VVIzLqzHSVRSNbfhyyeZnSkfi/HbptFbdkrZYw1wk+Nt8s7ZQI0G+55AGuxHGLWtq4AFW3OrHxAkK2o1JJf4QIgCgOGsCOf0hhTCqR27CKnay8lq+rhFBLEkLOWRHXUKc23SrPCMYFs5hoNCeuu3rFCu3Ai/kGoXNvuRJA+iioeF4nNZZOYj7x+UUf070lMzv9QG+47XGIz3OMJm01EL7kDU7czr+pry5xccmj7qXMGyZz3k7bAwD689qKNwxmQXECrJ0tzrl5MTznXTy9qWaggPVNOhXLUxb4tHThWNGNwbW9BewxDWyP+Udon+VtD5FaV8QSrSBCtqB/KZhl9jp6QedW+yt98NfS4FkKYuAa5rbaMB1kajzAonxnhtu1iu7c/wAG4wZW5eL4W/pYQD6DpWl6QrUgD2+0yzWajWZgLX5HvJexv7xcYJbJW3MuRz/M8q6fbEADpQbg+FW0oVQBRlDR6dMU12iAqVDUbcYA7d4jLhn1+Ihf171yuedO/wC03HaJaG+rH35fWke2dKohuSZzcATfPWVkelZRJSdCweNTkQPKRUeL7XWrcgW79wyfgtOR8yAIrWzbtAwrL56QT71Hj79nYkMZH69KcCCJGo1oWwmMTiGELIrK6MRlcZWVl2nyIO/Q0p8a4Ut62WJKOkkON1H2gRzA3iiPC+Oph7gOYd02jARp5+X5UZ43hIYXU+F9+k9fQ7evrWfqaVmsO80dJXuAe4iTd42uHs91ZObNMt9qTuZ89NBQnDpmw5YM/eM5MjUQNNehmaYe0PY61dAawuRj8S/Z9R0PppVfgXDrlq13NxR4XaNRJzeKevXXyrI1FE0Ke7nM3tNqVqNjEXV7Lvct97euhJ2UKWO8a6gAmNhNE7WCtW7PdITn3OsBgR67x9k0U49gu7W2Y0adxseZ8zEULxb2HuAJnQEhdgQANMxMgyT60Fa71Bk48eI1tW1+fearjQVkOqfZUKDKksCSTyG/UmrWDxaveZbZIVFMN8RjSYj7RH40s8eR7RLAGHidNAfPpyPvR/sJZxF5Mxc2bCA6kDxMdYWfKSSZ5DWdCtTGzffHzE9V/uU2p3sTDWKxQW0QyLlXaZMdNIGXcEQdIodw7EjFYi1aySqZmYzpCjeCdRmyz69JqziLCO1yyjFnuWwVLEMQB4iQZ00BMc4n1r9glNps7lFt3AImMxZTKxziZ16xU+reke0xtL/owSp6lQ3I4A4+YwcYxTLmYFSAkhXIPhXxHw+ZYGOetc54nizcbKJRIEqpOViOeXYdeg1601dprhe4w0BMmZ+HKsqum5OgnXX0NJH77lkJJcjU7wOfryqNGlhibTgKokWNxRQZremsAydGjQg9RFScI4P+8qnjgoxDk75SC4Jk7Eys+dQvw28zZYZo03J1MfnTnhcEuHw4XKM7AEkCDy1J6yu3PX1pypVFJLLyYGnS9R7niAuLYG1auXBYZjbUALmIIPwzHvInpQU465nBDsCPhgSfQflRbtJxMOwAiFGUELlLDeW1OtF+xXAu9UXMgnNo0amfOY+nvVPVCJvcQ7U+14CvcOvO4e8S7tAg7xyHTnt51pjlYaQZWQyEQY9OQiKfuKcJt2gbl8NbtrMiAxY5RlKkKI1aBudD01T+OW3u34aMyKkMoMskSHzwJlSNfLy1mm5YbmwItURT0jN4Dw17MRGYeRAbbXc+lH8Hjgygx4p1JOvUH0/XSvDw4IpncxJiNIBE+Zn6edUsXcAJVJzRBPMaRHr5VV2WrgSKNH0mJh3shxTNilU6q0KD7fWnftjwoNYUkf4en/Q0lR7MCPSKQ+w2BYYhGI22611/EYcXLeU8wVPvH/uCn2NaWmG1bdpnawqznb/DF3sfxcvbFq4f4lsDU7sh+FvWND5jzpvW4Mknb8Odcvv5sPcFxZz22IYfzJzHn7+XSmfjnaRBgw1tpNwQvUf3kfSr1TtEXp5iZ2u4j32JduQMb8hP96Fo1aMJ161m1DRdol2N5LNe1HJrKvKyqvH7iggH51Bc4wzEknegt3ERUP7zTG4wIT2hq5xNiImn79mPbAXVOCxBkwRaY/aT+UnqB9PQmuVLeBrZLxUhlJDKZBGhBHOqON4tLJ0mfQJwpttB1HI9R+Yql2h4a9wJdtAFkMsNiy67eYmhvYDtomMt9xfIF9R6Zo2ZfxHL0iWu1KmD/Y/rpSVSkrrsbiOUqpRty8xKxS96YLaDrOh161SxHDgQGAj+adNfIcpGtOHGuFam9bE/zqPvA5nqKGfuispYwY1Akg/Ty/XXzldH0z7Dx2Pmb1DUrUURWxqZmYaBTA9dI2msxNnEE2rNt7fdSNiqhJA0IA8h1135mo7Vi415kTZT4mJAC85JMAD61fwzC2pUfxiSD4QYHPQ6EkgHUAxRwWS3f2jDbb27yLgvAr1q+x0fNbZVIksC/h1jQaE6zHpXuL7PMmIW53iC1aZSyIxJV1zG2skySwGY8gDA5VI3HFIKEAAurEzMBQRr1gGmbjd3CJbCXbQvN4WymIIhlDMGOU5UYRm6jnFMUmZ8NjHP+BEqxZGxm/aLHbB8mGDKB3yQXKQRbECA+47whgTO2kDrznAOUf10PWOgpmXhFyxacpiFKXCwNtwQzHKyZnXqBcJGu8GgGN4dctksy6AjxbD5HWZBnpTtEIqlUOIJgxtuEYOH8SdlLBULAMRl0uMUiBI12k7axU3aXirNG6qFWEOpkgTJIk7TQ3hN4DKYgqSQeYPmKrcRvtfc5EJCzJ1g/gPT3oJQM9z2jCWRcfhNuCcLfFX0QLmDEFzsAoOsnl0966fca3hbItoGSFAtlROvTX1mdetDODYazgbNvOoF64FnxSSzDQa8xOkevOSG7Q8WLSxJ8OgXSOYEa+n1pSuzVqgUfSOJZE3dTcQdx65aZwiMwBMNcuDRVMCcqyRHSTtTOcGlrDJbGS5cRBkuFSS9sycq6mILZhMgCYiK5/fV7rCSYO+un96OjiF4Du2bOo0EQIHICBAAGgEaUxUQhAqn5HmQBdrmQ47EsCU1k6x05T66VXweHVToNfMk1LenxMAMxMnXYVa4FgnvXFAGxBb8vU0WhfAURTUgEFi1ow9kcA2fNFdJwtrSD70M4HwrIBR0kKsnQCtXCi0xcsbxK7Z8OC3c4HxiffY/WkvG4cjQbTI9TuPfcefrXRcXxG3i1vomrWCp9mkfQrSrjMHIOm/T6b86uLOsGbo0Wp8qjarWLska8/tD6Zo6E/X1FUyf0KCRaFvPJPnWVvFZXSYv8X7O4i1dNvu2Y8sgLZh1Eb1Jh+xOOf8A+3uD1gfea6XhOMEMfLeRr99WrnaAAjUfdPpTfpiKCsbRB4f+zG+x/iuLY9ifvoq37K0y+HEvP9AI+8ffTeuNZlBOhPLepkxazBOo9v1vVtg8Spqt5nMsd2DxmHYXLDi4VMgr4GB9Dp7TTx2N7dC9GHxam1iBp4gQHjmvn+tRsUGPGYgQOe+v12GlUuI2MPfBF1EYToRow5iCNZH31R6AYSy1yOY4WWjnI60G4zwnJmu2hKnVk/l5kr1HVf8AtQjAYy/hyFVv3iz0LAXl+4XB9fIzNM+A4mlz4TB5qwykexrN1OkDrtcfj4j+n1Wxrich4vwtjdcoZLnw6/E3l+dWMFjnuJnuOV7sFHBBlWSAogakEsNtYnpXReOdkrWI8Vt+6czylSTvpIg+hqo37O7fcd0rw0zmA0zQRMT0JFLLpmK2axtwZqtr0Fit88+05jgeI538Yyz01OoI0B5CCfaJo5d7QjvGa+7ZWUL3aO3jXKEBlYGTLrrE6iKI8X4JesIUuoLqhSEUELmY5VDA/wCVV2I8udCsNwDv7KAZc4aBBOZZklSuoI0BB08ucUUKxK2sfHeXqtYB73HmR4DGIcoRx8QLEfGsH7M7aCdtaN2cWgL3HYPcLHwwSYACkZxbEgkTpML1ig2H7PMQyAkMHK7axJEkHb05zVrC8FfKMgIHi5GIBK7HXdTVBTv9JkGuo+oQZY4ELrs577IWynKEORjqC8sfBE68zseVMmE4R3FtSFlMrCQSJZhGoB+IxvuIqvwiy63+7uAorKZiYJTWT0OpGn8xqv2i4/ce6ttVGQT6ATzjXNz1odVnc+nwQIemQeoZBkYwodhevEgW3zJm3YAbnXRcwB86E4zEK7TyG2k6e3OsuM1zRiSJ0G3PSrFq2elMU9OeSfw8RarrM2XiDs3RD6kGpbIuk/DPkdP+1H+G8Ia4Yg078D7KoollE0yumB5iz65hxOdcP7N4i7o2i8z+FdC7KdmxaUQKZLXC0HIVHxPi1nDpLEAUdUSmInUqvVPVLbFbayTArn/bPtfnm1ZbTZmH3Dz+712Hdp+11zEEqhKprsdWG2vSlt9un65VGX54lML8xm/ZxiguLFs/DeR7Z6SRnH1WPemTjHDirEcp9K57gMWbVxHUHMjKw9VIP4V2XHW1vIl1NVdQwPkRI+hplDbEG4uJz7ifCZGZZzCdNweREdCKVcThspkTlO07g8wfPX3EGup3sESdBppPp5UqdpOHBWY6hW+IxseR9vuJqXF8iUVrYijB/Rr2r/8A4Jf/AJR/qFe0GFvPMUGECIE6SRy61AuMhhOseW2tSXoSSY12B1I9uVC7l8QemvzNPE2meFvGzEdoQloRvsBI0/7CqmH7Qggs8eXnGvy1pTe5WruajfL+nDlzjYzl4105mAOf0qW1x/xQWlT5RqaWc1eBjNT6hkGkI1WuPnU82Oi68/pyoth+PhAM7LmHufXypA78g6VvbxZBk6+tTvBwZX0iDcGdX4f2sUxmbTXf9a0xYPjSNBzCD51w+zxYryHvNXuHdo7omTAnlA/W1CakjHpNoVatRB1C4ncLvdXRlcKw6HkfwNQ4TgOHttnS3Da6yTvvua5rwvtg2uYhQNv76iaN4btu4AOQ3B1tmW/0GDy5TSz6WzbiAT57xhNXcbQSPaOOO4HZuwWUSCDmAEyOumvvUicMQCAJ8zvzP3k0sYP9ouHYwXgjQhhBB852orZ7X4dvtr7GfxoYVAxNsmFLsRtJxIONcCfxPZXO7ACJAgeRJiPr60rWP2e4lzNwooPINPzPOnb/AOqLH830Nav2rw4+19DQV01JXL9zDjVVAmwHEC4T9niD4mJothex2HT7M+tV8R27w67Sfp99CsZ+0tBoqj3b8qPuUcRfJ5McsPw22mwArMZxK1ZUlmAA61y/iH7Qb76KQB/lEfeTNLuK4tdumWYn1Mn+1duY8CQLToHaD9oIErY/1HT5Dc0kY/iVy8xZ3JPn+A5UOXf8anmK4Uxe7Zli/YT1Z51IRpUSvW9ppmryk3nlXSf2W8aFyycLcPjtybc87Z1gf0k/IjpXNT9K8sYlkYMjFWUyrKYIPWetSDOE7dicPlNKvadALTF9upjel5f2jY4LlLWn/wAzWvF/tZR9KEcS4zexBm7czdAAAo9hVt1pUpIP3kfzGsqr3Z6j/TXtVvJtBtzFk7mq1zFVTuXiaiz0YtBBJcOKrz97FUS1aM9RultkJG4DzrRrlDxJ2Fbgmp3TtolrPNYGqC01TCK4GQRJVNSBqhDgV53/AEFdeVtLS3Y0q5Y4q66BoG22sUHN0msJPOrByOJU0weYxntGTAKKY3Z1VmI8iR4agu4rDv8A8NlJ5o5X6DQ/Kggr0E9aktfmcEA4lu6H3S68dC0/WoWxN0bu3zNaBzW2ehlF8QoZh3m6XCd2J9TVq0lUsvSp7OKK76j61TZbiW33l62tSusR1rXC3Ubn+dWwF96ideQK1ZXrb1saiWngFTBYFaWkNSMDG1RedNbvwzzH4VFaMjrW5SvEFTOnoFeO2UE8p++pVSvRZBmRy2iunSvDfzH9e1eVYyJ/6n+6srp0TrlaGsrKJKiamtTWVlRJEt2uX661qd/lWVlWlZGm9TLWVlRIM8rasrKmdMFevWVlTIno/GsNe1lRIni1uKysq06bLXtZWVE4T3C/GPei9vasrKGYQcTDvUv6+lZWVWWli1Wt3esrKrImq7VuKysqZMkt7/rpUzb1lZUyJXrKysrpM//Z" alt="" />
                </div>
                <div className="more-detail-prepare">
                    <h1>Recipe</h1>
                    <p>Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.In a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.Drain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.</p>
                </div>
                <div className="more-detail-ingrediants">
                    <h1>Ingrediants</h1>
                    <li>Sugar - 1/2 cup</li>
                    <li>Rice - 1/2 cup</li>
                </div>
                
            </div>
        </div>
    )
}

export default MoreDetail
