import React from "react";

const Skill = () => {
    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
            <h1 className="text-2xl font-bold text-left text-white mb-6 ">
                Skill Sets
            </h1>
            <div class="grid grid-cols-2 lg:grid-cols-5 gap-4">
                <div
                    class="card  bg-[#2d3538] shadow-xl"
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div class="card-body m-auto my-0">
                        <img
                            src="https://i.ibb.co/jf7zF8d/html-5.png"
                            alt="css-3"
                            width="80px"
                            height="80px"
                            border="0"
                        />
                    </div>
                </div>

                <div
                    class="card  bg-[#2d3538] shadow-xl"
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div class="card-body m-auto my-0">
                        <img
                            alt="svgImg"
                            width="80px"
                            height="80px"
                            border="0"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiN1bmRlZmluZWQ7Ij48cGF0aCBmaWxsPSIjMDI3N0JEIiBkPSJNNDEsNUg3bDMsMzRsMTQsNGwxNC00TDQxLDVMNDEsNXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDM5QkU1IiBkPSJNMjQgOEwyNCAzOS45IDM1LjIgMzYuNyAzNy43IDh6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTMzLjEgMTNMMjQgMTMgMjQgMTcgMjguOSAxNyAyOC42IDIxIDI0IDIxIDI0IDI1IDI4LjQgMjUgMjguMSAyOS41IDI0IDMwLjkgMjQgMzUuMSAzMS45IDMyLjUgMzIuNiAyMSAzMi42IDIxeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNFRUUiIGQ9Ik0yNCwxM3Y0aC04LjlsLTAuMy00SDI0eiBNMTkuNCwyMWwwLjIsNEgyNHYtNEgxOS40eiBNMTkuOCwyN2gtNGwwLjMsNS41bDcuOSwyLjZ2LTQuMmwtNC4xLTEuNEwxOS44LDI3eiI+PC9wYXRoPjwvc3ZnPg=="
                        />
                    </div>
                </div>
                <div
                    class="card  bg-[#2d3538] shadow-xl"
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div class="card-body m-auto my-0">
                        <img
                            alt="svgImg"
                            width="80px"
                            height="80px"
                            border="0"
                            src="https://i.ibb.co/dgVWps2/tailwind-css.png"
                        />
                    </div>
                </div>
                <div
                    class="card  bg-[#2d3538] shadow-xl"
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div class="card-body m-auto my-0">
                        <img
                            alt="svgImg"
                            width="80px"
                            height="80px"
                            border="0"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiN1bmRlZmluZWQ7Ij48cGF0aCBmaWxsPSIjNjczYWI3IiBkPSJNNDIsMzdjMCwyLjc2Mi0yLjIzOCw1LTUsNUgxMWMtMi43NjEsMC01LTIuMjM4LTUtNVYxMWMwLTIuNzYyLDIuMjM5LTUsNS01aDI2YzIuNzYyLDAsNSwyLjIzOCw1LDUgVjM3eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zMy4wMywyNS42Yy0wLjY1LTAuOS0xLjU5LTEuNTItMi44LTEuODVjMCwwLDEuMDItMC4zNywxLjk0LTEuNzVjMC41NS0wLjg4LDAuODMtMS45NCwwLjgzLTMuMTggYzAtMi4xNS0wLjc4LTMuOC0yLjM0LTQuOTNDMjkuMSwxMi43NiwyNy4zNCwxMiwyNC4zNSwxMkgxNXYyNGgxMC40M2MyLjgzLTAuMDIsNC45Ni0wLjYzLDYuNDEtMS44YzEuNDQtMS4xOSwyLjE2LTIuOTUsMi4xNi01LjMgQzM0LDI3LjYsMzMuNjgsMjYuNSwzMy4wMywyNS42eiBNMjEsMTZjMCwwLDQuMTcsMCw0LjI1LDBjMS41MiwwLDIuNzUsMS4yMywyLjc1LDIuNzVjMCwxLjUyLTEuMjMsMi43NS0yLjc1LDIuNzUgYy0wLjA4LDAtNC4yNSwwLTQuMjUsMFYxNnogTTI2LDMyaC01di02aDVjMS42NiwwLDMsMS4zNCwzLDNDMjksMzAuNjYsMjcuNjYsMzIsMjYsMzJ6Ij48L3BhdGg+PC9zdmc+"
                        />
                    </div>
                </div>
                <div
                    class="card  bg-[#2d3538] shadow-xl"
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div class="card-body m-auto my-0">
                        <img
                            src="https://i.ibb.co/m6L3TzL/css-3.png"
                            alt="css-3"
                            width="80px"
                            height="80px"
                            border="0"
                        />
                    </div>
                </div>
                <div
                    class="card  bg-[#2d3538] shadow-xl"
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div class="card-body m-auto my-0">
                        <img
                            src="https://i.ibb.co/x5tp11p/js.png"
                            alt="css-3"
                            width="80px"
                            height="80px"
                            border="0"
                        />
                    </div>
                </div>

                <div
                    class="card  bg-[#2d3538] shadow-xl"
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div class="card-body m-auto my-0">
                        <img
                            width="80px"
                            height="80px"
                            alt="svgImg"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiN1bmRlZmluZWQ7Ij48cGF0aCBmaWxsPSIjNWQ0MDM3IiBkPSJNNDIsMTcuM0M0MiwzNy44LDI0LDQ0LDI0LDQ0UzYsMzcuOCw2LDE3LjNjMC0yLjUsMC4yLTQuNiwwLjQtNi4zYzAuMy0yLjUsMi00LjUsNC40LTUuMSBDMTMuOSw1LDE4LjgsNCwyNCw0czEwLjEsMSwxMy4zLDEuOWMyLjQsMC42LDQuMSwyLjcsNC40LDUuMUM0MS44LDEyLjcsNDIsMTQuOSw0MiwxNy4zeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0Y2FmNTAiIGQ9Ik0yNCw3YzQuOSwwLDkuNSwxLDEyLjUsMS44YzEuMiwwLjMsMiwxLjMsMi4yLDIuNmMwLjIsMS45LDAuMywzLjksMC4zLDUuOWMwLDE1LjYtMTEuNSwyMS45LTE1LDIzLjQgYy0zLjUtMS42LTE1LTcuOS0xNS0yMy40YzAtMiwwLjEtNCwwLjMtNS45YzAuMS0xLjMsMS0yLjMsMi4yLTIuNkMxNC41LDgsMTkuMSw3LDI0LDcgTTI0LDRjLTUuMiwwLTEwLjEsMS0xMy4zLDEuOSBDOC40LDYuNSw2LjYsOC42LDYuNCwxMUM2LjIsMTIuNyw2LDE0LjksNiwxNy4zQzYsMzcuOCwyNCw0NCwyNCw0NHMxOC02LjIsMTgtMjYuN2MwLTIuNS0wLjItNC42LTAuNC02LjNjLTAuMy0yLjUtMi00LjUtNC40LTUuMSBDMzQuMSw1LDI5LjIsNCwyNCw0TDI0LDR6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2RjZWRjOCIgZD0iTTIzIDI4SDI1VjM2SDIzeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0Y2FmNTAiIGQ9Ik0yNCwxMGMwLDAtNiw1LTYsMTNjMCw1LjIsMy4zLDguNSw1LDEwbDEtM2wxLDNjMS43LTEuNSw1LTQuOCw1LTEwQzMwLDE1LDI0LDEwLDI0LDEweiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM4MWM3ODQiIGQ9Ik0yNCwxMGMwLDAtNiw1LTYsMTNjMCw1LjIsMy4zLDguNSw1LDEwbDEtM1YxMHoiPjwvcGF0aD48L3N2Zz4="
                        />
                    </div>
                </div>
                <div
                    class="card  bg-[#2d3538] shadow-xl"
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div class="card-body m-auto my-0">
                        <img
                            width="80px"
                            height="80px"
                            alt="svgImg"
                            src="https://i.ibb.co/JBmbKrp/expressjs.png"
                        />
                    </div>
                </div>
                <div
                    class="card  bg-[#2d3538] shadow-xl"
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div class="card-body m-auto my-0">
                        <img
                            src="https://i.ibb.co/yY5TtH9/physics.png"
                            alt="css-3"
                            width="80px"
                            height="80px"
                            border="0"
                        />
                    </div>
                </div>
                <div
                    class="card  bg-[#2d3538] shadow-xl"
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div class="card-body m-auto my-0">
                        <img
                            alt="svgImg"
                            width="80px"
                            height="80px"
                            border="0"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiN1bmRlZmluZWQ7Ij48cGF0aCBmaWxsPSIjMjFhMzY2IiBkPSJNMjQuMDA3LDQ1LjQxOWMtMC41NzQsMC0xLjE0My0wLjE1LTEuNjQ2LTAuNDRsLTUuMjQtMy4xMDNjLTAuNzgzLTAuNDM4LTAuNDAxLTAuNTkzLTAuMTQzLTAuNjgyCWMxLjA0NC0wLjM2NSwxLjI1NS0wLjQ0OCwyLjM2OS0xLjA4MWMwLjExNy0wLjA2NywwLjI3LTAuMDQzLDAuMzksMC4wMjhsNC4wMjYsMi4zODljMC4xNDUsMC4wNzksMC4zNTIsMC4wNzksMC40ODYsMGwxNS42OTctOS4wNjEJYzAuMTQ1LTAuMDgzLDAuMjQtMC4yNTEsMC4yNC0wLjQyNFYxNC45MzJjMC0wLjE4MS0wLjA5NC0wLjM0Mi0wLjI0My0wLjQzMkwyNC4yNTMsNS40NDZjLTAuMTQ1LTAuMDg2LTAuMzM4LTAuMDg2LTAuNDgzLDAJTDguMDgyLDE0LjQ5OWMtMC4xNTIsMC4wODYtMC4yNDksMC4yNTUtMC4yNDksMC40Mjh2MTguMTE0YzAsMC4xNzMsMC4wOTQsMC4zMzgsMC4yNDQsMC40Mmw0LjI5OSwyLjQ4MwljMi4zMzQsMS4xNjcsMy43Ni0wLjIwOCwzLjc2LTEuNTkxVjE2LjQ3NmMwLTAuMjU1LDAuMi0wLjQ1MiwwLjQ1Ni0wLjQ1MmgxLjk4OGMwLjI0OCwwLDAuNDUyLDAuMTk2LDAuNDUyLDAuNDUydjE3Ljg4NgljMCwzLjExMi0xLjY5Nyw0LjktNC42NDgsNC45Yy0wLjkwOCwwLTEuNjIzLDAtMy42MTktMC45ODJsLTQuMTE4LTIuMzczQzUuNjI5LDM1LjMxNyw1LDM0LjIxNiw1LDMzLjA0MlYxNC45MjgJYzAtMS4xNzksMC42MjktMi4yNzksMS42NDYtMi44NjFMMjIuMzYsMy4wMDJjMC45OTQtMC41NjIsMi4zMTQtMC41NjIsMy4zMDEsMGwxNS42OTQsOS4wNjlDNDIuMzY3LDEyLjY1Niw0MywxMy43NTMsNDMsMTQuOTMyCXYxOC4xMTRjMCwxLjE3NS0wLjYzMywyLjI3MS0xLjY0NiwyLjg2MUwyNS42Niw0NC45NzFjLTAuNTAzLDAuMjkxLTEuMDczLDAuNDQtMS42NTQsMC40NCI+PC9wYXRoPjxwYXRoIGZpbGw9IiMyMWEzNjYiIGQ9Ik0yOC44NTYsMzIuOTM3Yy02Ljg2OCwwLTguMzA4LTMuMTUzLTguMzA4LTUuNzk3YzAtMC4yNTEsMC4yMDMtMC40NTIsMC40NTUtMC40NTJoMi4wMjgJYzAuMjI0LDAsMC40MTMsMC4xNjMsMC40NDgsMC4zODRjMC4zMDYsMi4wNjYsMS4yMTgsMy4xMDgsNS4zNzEsMy4xMDhjMy4zMDgsMCw0LjcxNS0wLjc0Nyw0LjcxNS0yLjUwMgljMC0xLjAxLTAuNDAxLTEuNzYtNS41NC0yLjI2M2MtNC4yOTktMC40MjQtNi45NTUtMS4zNzEtNi45NTUtNC44MDljMC0zLjE2NywyLjY3Mi01LjA1Myw3LjE0Ny01LjA1MwljNS4wMjYsMCw3LjUxNywxLjc0NSw3LjgzMSw1LjQ5M2MwLjAxMiwwLjEzLTAuMDM1LDAuMjU1LTAuMTIyLDAuMzVjLTAuMDg2LDAuMDktMC4yMDgsMC4xNDUtMC4zMzQsMC4xNDVoLTIuMDM5CWMtMC4yMTIsMC0wLjM5Ny0wLjE0OS0wLjQ0LTAuMzU0Yy0wLjQ5MS0yLjE3My0xLjY3OC0yLjg2OC00LjkwNC0yLjg2OGMtMy42MTEsMC00LjAzMSwxLjI1Ny00LjAzMSwyLjIJYzAsMS4xNDMsMC40OTUsMS40NzcsNS4zNjcsMi4xMjJjNC44MjUsMC42NCw3LjExNiwxLjU0NCw3LjExNiw0LjkzNWMwLDMuNDE4LTIuODUzLDUuMzc5LTcuODI3LDUuMzc5Ij48L3BhdGg+PC9zdmc+"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;
