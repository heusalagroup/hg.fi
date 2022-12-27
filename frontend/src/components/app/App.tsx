import React from 'react';
import { APP_CLASS_NAME } from "../../constants/className";
import { useTranslation } from "react-i18next";
import {
    T_NAV_API,
    T_NAV_DOCS,
    T_NAV_GITHUB,
    T_WEBSITE_SUBTITLE,
    T_WEBSITE_TITLE
} from "../../constants/translation";
import { HgLogoSvg } from "../../assets";
import { Icon } from "../../fi/hg/frontend/components/icon/Icon";
import { CodePreview } from "../codePreview/CodePreview";
import './App.scss';

export function App () {
    const {t} = useTranslation();
    return (
        <div className={APP_CLASS_NAME}>

            <nav className={APP_CLASS_NAME + "-nav"}>
                <a className={APP_CLASS_NAME + "-nav-logo-link"} href={"/"}>
                    <Icon className={APP_CLASS_NAME + "-nav-logo"}><HgLogoSvg /></Icon>
                </a>
                <section className={APP_CLASS_NAME + "-nav-content"}>
                    <a
                        className={APP_CLASS_NAME + "-nav-link"}
                        href={"https://docs.hg.fi"}
                    >{t(T_NAV_DOCS)}</a>
                    <a
                        className={APP_CLASS_NAME + "-nav-link"}
                        href={"https://docs.hg.fi/api/"}
                    >{t(T_NAV_API)}</a>
                    {/*<a*/}
                    {/*    className={APP_CLASS_NAME + "-nav-link"}*/}
                    {/*    href={"https://hg.fi/tutorial"}*/}
                    {/*>{t(T_NAV_TUTORIAL)}</a>*/}
                    <a
                        className={APP_CLASS_NAME + "-nav-link"}
                        href={"https://github.com/heusalagroup"}
                    >{t(T_NAV_GITHUB)}</a>
                </section>
            </nav>

            <header className={APP_CLASS_NAME + "-header"}>

                <h1>{t(T_WEBSITE_TITLE)}</h1>

                <h2>{t(T_WEBSITE_SUBTITLE)}</h2>

                <section className={APP_CLASS_NAME + "-header-button-container"}>

                    {/*<Button className={APP_CLASS_NAME + "-header-button"}>{t(T_WEBSITE_GET_STARTED_BUTTON_LABEL)}</Button>*/}

                </section>

            </header>

            <section className={APP_CLASS_NAME + "-content"}>

                <section className={APP_CLASS_NAME + "-content-row"}>

                    <article>

                        <h3>Full Stack</h3>

                        <p>Our modules make it easy to write solutions all the way from the frontend to the backend with TypeScript.</p>

                        <p>Design enterprise ready REST APIs, write client libraries which work on all sides of the stack,
                           and build frontends using most popular library for user interfaces -- React.</p>

                        <p>All with the same robust programming language, TypeScript.</p>

                    </article>

                    <article>

                        <h3>Backend Development</h3>

                        <p>Our TypeScript backend solutions use the same familiar design as Java's Spring Boot.</p>

                        <p>Use annotations to add HTTP functionality into your backend code,
                           easily document your APIs with OpenAPI, and define entity classes with PostgreSQL and MySQL
                           database support.</p>

                    </article>

                    <article>

                        <h3>Frontend Development</h3>

                        <p>React is currently the most popular solution to write user interfaces.</p>

                        <p>We provide ready to use services, components and hooks for building user interfaces with TypeScript and ReactJS.</p>

                    </article>

                    <article>

                        <h3>Standalone</h3>

                        <p>Our code requires minimal dependencies and most of those are only required compile time.</p>

                        <p>Backend can be transpiled as a single standalone JavaScript file with only dependency for
                           NodeJS.</p>

                        <p>Frontend is transpiled to static JavaScript, CSS, HTML and image files.</p>

                    </article>

                    <article>

                        <h3>Open Source</h3>

                        <p>Our software is MIT licenced -- just like the stack which we have built on.</p>

                        <p>MIT license grants permissions for commercial use, modifications, distribution and private use.</p>

                        <p>You are allowed to publish the end result under different terms and without the source code.</p>

                    </article>

                    <article>

                        <h3>Commercial Support</h3>

                        <p>Our team is ready to support
                        any commercial need you may have for software development using our modules.</p>

                        <p>We can provide technical support -- or build complete solutions
                           as a service for your company.</p>

                    </article>

                    <article>

                        <h3>Git Modules</h3>

                        <p>We use Git Modules instead of NPM for our own modules.</p>

                        <p>Git enables full advance of compile time transpiling and three shaking to
                           build the end result for different use cases.</p>

                        <p>You can use feature flags which will affect the end result by removing and adding
                           complete code blocks. We use it to remove debug log lines from our production builds.</p>

                    </article>

                </section>

                <hr />

                <section className={APP_CLASS_NAME + "-content-sample"}>
                    <article className={APP_CLASS_NAME + "-content-sample-content"}>
                        <h3>A Simple HTTP Controller</h3>
                        <p>HG controllers are simply TypeScript classes.</p>
                        <p>We don't make assumptions how your classes are implemented.</p>
                    </article>
                    <article className={APP_CLASS_NAME + "-content-sample-example"}>
                        <CodePreview className={APP_CLASS_NAME + "-content-sample-example-preview"}
                            title={'Example HTTP controller'}
                        >{
                            `@RequestMapping("/")
export class ApiController {
    @GetMapping("/)
    public static getIndex () : JsonObject {
        return {
            hello: "world"
        };
    }
}
`
                        }</CodePreview>
                    </article>
                </section>

                <section className={APP_CLASS_NAME + "-content-sample"}>
                    <article className={APP_CLASS_NAME + "-content-sample-content"}>
                        <h3>A Simple Service</h3>
                        <p>HG services are simply TypeScript classes.</p>
                        <p>Dependencies should be provided through the constructor.
                           It also makes it easier to unit test your code.</p>
                    </article>
                    <article className={APP_CLASS_NAME + "-content-sample-example"}>
                        <CodePreview className={APP_CLASS_NAME + "-content-sample-example-preview"}
                            title={'Example user service'}
                        >{`export class UserService {

    private _databaseService : DatabaseService;
    
    public constructor (databaseService: DatabaseService) {
      this._databaseService = databaseService;
    }
                        
    public async getUserList () : Promise<readonly UserDTO[]> {
        const userList = await this._databaseService.getUserEntityList();
        return map(
            userList,
            (item: UserEntity) : UserDTO {
                return {
                    name: item.name,
                    email: item.email
                };
            }
        );
    }
}
`
                        }</CodePreview>
                    </article>
                </section>

                <section className={APP_CLASS_NAME + "-content-sample"}>
                    <article className={APP_CLASS_NAME + "-content-sample-content"}>
                        <h3>Simple Data Models</h3>
                        <p>HG data models are simply TypeScript interfaces without any methods.</p>
                        <p>You can also use JSDoc to document it.</p>
                    </article>
                    <article className={APP_CLASS_NAME + "-content-sample-example"}>
                        <CodePreview className={APP_CLASS_NAME + "-content-sample-example-preview"}
                            title={'Example data models'}
                        >{`export interface UserDTO {

    /** User's real name */
    name : string;

    /** User's email address. */
    email : string;

}
`
                        }</CodePreview>
                    </article>
                </section>

                <section className={APP_CLASS_NAME + "-content-sample"}>
                    <article className={APP_CLASS_NAME + "-content-sample-content"}>
                        <h3>Simple type checks</h3>
                        <p>HG provides utilities to easily create advanced type checking functions for TypeScript.</p>
                        <p>Any type we define should come with equivalent type check functions.</p>
                        <p>Our library has been extended over lodash functionality.</p>
                    </article>
                    <article className={APP_CLASS_NAME + "-content-sample-example"}>
                        <CodePreview className={APP_CLASS_NAME + "-content-sample-example-preview"}
                            title={'Example type checking functionality'}
                        >{`export function isUserDTO (value: any): value is UserDTO {
    return (
        isRegularObject(value)
        && hasNoOtherKeysInDevelopment(value, [
            'name',
            'email'
        ])
        && isString(value?.name)
        && isString(value?.email)
    );
}
`
                        }</CodePreview>
                    </article>
                </section>

                <section className={APP_CLASS_NAME + "-content-sample"}>
                    <article className={APP_CLASS_NAME + "-content-sample-content"}>
                        <h3>Simple type explains</h3>
                        <p>We also provide utilities to explain why a type check doesn't match.</p>
                        <p>Any type we define should come with equivalent explain functions.</p>
                    </article>
                    <article className={APP_CLASS_NAME + "-content-sample-example"}>
                        <CodePreview className={APP_CLASS_NAME + "-content-sample-example-preview"}
                            title={'Example type explaining functionality'}
                        >{`export function explainUserDTO (value: any): string {
    return explain(
        [
            explainRegularObject(value),
            explainNoOtherKeysInDevelopment(value, [
                'name',
                'email'
            ]),
            explainProperty("name", explainString(value?.name)),
            explainProperty("email", explainString(value?.email))
        ]
    );
}
`
                        }</CodePreview>
                    </article>
                </section>

            </section>

            <footer className={APP_CLASS_NAME + "-footer"}>

                <p>
                <strong>Heusala Group Ltd</strong><br />
                <br />
                Aleksis Kiven katu 11 B 29<br />
                33100 Tampere<br />
                Finland<br />
                    <br />
                    <a href={"mailto:info@heusalagroup.fi"}>info@heusalagroup.fi</a><br />
                    <br />
                    <a href={"https://www.heusalagroup.fi"}>www.heusalagroup.fi</a><br />
                </p>

                <p>
                    <strong>Project Builders</strong><br />
                    <br />
                    <a href={"https://github.com/heusalagroup/create-backend"}>create-backend</a><br />
                    <a href={"https://github.com/heusalagroup/create-command"}>create-command</a><br />
                    <a href={"https://github.com/heusalagroup/create-ssr-server"}>create-ssr-server</a><br />
                </p>

                <p>
                    <strong>Modules</strong><br />
                    <br />
                    <a href={"https://github.com/heusalagroup/fi.hg.core"}>fi.hg.core</a><br />
                    <a href={"https://github.com/heusalagroup/fi.hg.node"}>fi.hg.node</a><br />
                    <a href={"https://github.com/heusalagroup/fi.hg.backend"}>fi.hg.backend</a><br />
                    <a href={"https://github.com/heusalagroup/fi.hg.frontend"}>fi.hg.frontend</a><br />
                </p>

            </footer>

        </div>
    );
}
