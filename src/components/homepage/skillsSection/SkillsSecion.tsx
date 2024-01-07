import { Section } from "@/components/common/section/Section";

export const SkillSection = () => {
  return (
    <Section>
      <h2 className="pb-[32px] text-center font-bold text-pink-400 tracking-wider">
        技能列表
      </h2>

      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[36px]">
          <div>
            <div className="bg-slate-950 rounded-lg border p-4">
              <div className="flex justify-between">
                <div className="font-bold text-sky-950 text-xl bg-pink-400 mb-[8px] ">
                  Nextjs | Front - End
                </div>
                {/* <div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input
                        id="switch"
                        type="checkbox"
                        className="peer sr-only"
                      />
                      <label htmlFor="switch" className="hidden" />
                      <div className="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300" />
                    </label>
                  </div> */}
              </div>

              <p className="text-gray-400 text-base">
                在前端開發上，專長的工具為 React，採用 React 框架 Next 搭配
                Typescript，使用 Rudex
                架構，擁有多人前端合作與後端工程師密切合作之經驗。
              </p>
              <br />
              <div className="font-bold text-sky-950 text-xl bg-pink-400 mb-[8px] ">
                技術內容
              </div>

              <div className="flex gap-2 flex-wrap">
                <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  <div className="mt-px">React</div>
                </div>
                <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  <div className="mt-px">Next</div>
                </div>
                <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  <div className="mt-px">JavaScript</div>
                </div>
                <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  <div className="mt-px">TypeScript</div>
                </div>

                <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  <div className="mt-px">Redux</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-slate-950 rounded-lg border p-4">
              <div className="flex justify-between">
                <div className="font-bold text-sky-950 text-xl bg-pink-400 mb-[8px] ">
                  UI dev | Front - End
                </div>
                {/* <div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input
                        id="switch"
                        type="checkbox"
                        className="peer sr-only"
                      />
                      <label htmlFor="switch" className="hidden" />
                      <div className="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300" />
                    </label>
                  </div> */}
              </div>

              <p className="text-gray-400 text-base">
                在前端開發上，精通切版技能，包含跨平台網站、多頁式 RWD
                網站、網頁應用程式（web
                app），能夠還原設計稿，擁有與UI設計師密切合作之經驗。
              </p>
              <br />
              <div className="font-bold text-sky-950 text-xl bg-pink-400 mb-[8px] ">
                技術內容
              </div>

              <div className="flex gap-2 flex-wrap">

                <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  <div className="mt-px">CSS</div>
                </div>
                <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  <div className="mt-px">HTML</div>
                </div>
                <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  <div className="mt-px">Sass</div>
                </div>
                <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  <div className="mt-px">TailwindCSS</div>
                </div>
                <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  <div className="mt-px">bootstrap 5</div>
                </div>
                <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  <div className="mt-px">Styled Components</div>
                </div>
              </div>
            </div>
          </div>

          {/* <div>
              <div className="bg-slate-950 rounded-lg border p-4">
                <div className="flex justify-between">
                  <div className="font-bold text-sky-950 text-xl bg-pink-400 mb-[8px] ">
                    Libraries | Front - End
                  </div>
                  <div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input
                        id="switch"
                        type="checkbox"
                        className="peer sr-only"
                      />
                      <label htmlFor="switch" className="hidden" />
                      <div className="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300" />
                    </label>
                  </div>
                </div>

                <p className="text-gray-400 text-base">
                  This is a simple blog card example using Tailwind CSS. You can
                  replace this text with your own blog content.
                </p>
                <br />
                <div className="font-bold text-sky-950 text-xl bg-pink-400 mb-[8px] ">
                  技術內容
                </div>

                <div className="flex gap-2 flex-wrap">
                  <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                    <div className="mt-px">JavaScript</div>
                  </div>
                  <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                    <div className="mt-px">TypeScript</div>
                  </div>
                  <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                    <div className="mt-px">React</div>
                  </div>
                  <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                    <div className="mt-px">Redux</div>
                  </div>
                  <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                    <div className="mt-px">TailwindCSS</div>
                  </div>
                  <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                    <div className="mt-px">Styled Components</div>
                  </div>
                </div>
              </div>
            </div> */}
          <div>
            <div className="bg-slate-950 rounded-lg border p-4">
              <div className="flex justify-between">
                <div className="font-bold text-sky-950 text-xl bg-pink-400 mb-[8px] ">
                  工具 | Tools
                </div>
                {/* <div>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input
                      id="switch"
                      type="checkbox"
                      className="peer sr-only"
                    />
                    <label htmlFor="switch" className="hidden" />
                    <div className="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300" />
                  </label>
                </div> */}
              </div>

              <p className="text-gray-400 text-base">
                在工作上，能夠使用工具來增進工作效率，用於合作的工具包含版本控制、敏捷開發、專案管理、程式設計之架構圖繪製...等。
              </p>
              <br />
              <div className="font-bold text-sky-950 text-xl bg-pink-400 mb-[8px] ">
                技術內容
              </div>

              <div className="flex gap-2 flex-wrap">
                <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  <div className="mt-px">Git</div>
                </div>
                <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  <div className="mt-px">Github</div>
                </div>
                <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  <div className="mt-px">Gitlab</div>
                </div>
                <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  <div className="mt-px">Postman</div>
                </div>
                <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  <div className="mt-px">Draw.io</div>
                </div>
                <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  <div className="mt-px">Jira</div>
                </div>
                <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  <div className="mt-px">Asana</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-slate-950 rounded-lg border p-4">
              <div className="flex justify-between">
                <div className="font-bold text-sky-950 text-xl bg-pink-400 mb-[8px] ">
                  後端開發 | back - End
                </div>
                {/* <div>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input
                      id="switch"
                      type="checkbox"
                      className="peer sr-only"
                    />
                    <label htmlFor="switch" className="hidden" />
                    <div className="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300" />
                  </label>
                </div> */}
              </div>

              <p className="text-gray-400 text-base">
                在後端開發上，擁有基本的概念，促進與後端工程師溝通的效率。
              </p>
              <br />
              <div className="font-bold text-sky-950 text-xl bg-pink-400 mb-[8px] ">
                技術內容
              </div>

              <div className="flex gap-2 flex-wrap">
                <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  <div className="mt-px">Node.js</div>
                </div>
                <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  <div className="mt-px">Express</div>
                </div>
                <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  <div className="mt-px">串接 RESTful API</div>
                </div>
                <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  <div className="mt-px">串接 GraphQL API</div>
                </div>
                <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  <div className="mt-px">My SQL</div>
                </div>
                <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  <div className="mt-px">MongoDB</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
