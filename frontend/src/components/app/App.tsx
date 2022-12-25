import React from 'react';
import { APP_CLASS_NAME } from "../../constants/className";
import { useTranslation } from "react-i18next";
import { T_NAV_DOCS, T_WEBSITE_GET_STARTED_BUTTON_LABEL, T_WEBSITE_SUBTITLE, T_WEBSITE_TITLE } from "../../constants/translation";
import { HgLogoSvg } from "../../assets";
import { Icon } from "../../fi/hg/frontend/components/icon/Icon";
import { Button } from "../../fi/hg/frontend/components/button/Button";
import './App.scss';

export function App () {
    const {t} = useTranslation();
    return (
        <div className={APP_CLASS_NAME}>
            <nav className={APP_CLASS_NAME + "-nav"}>
                <Icon className={APP_CLASS_NAME + "-nav-logo"}><HgLogoSvg /></Icon>
                <section className={APP_CLASS_NAME + "-nav-content"}>
                    <a
                        className={APP_CLASS_NAME + "-nav-link"}
                        href={"https://docs.hg.fi"}
                    >{t(T_NAV_DOCS)}</a>
                </section>
            </nav>
            <header className={APP_CLASS_NAME + "-header"}>

                <h1>{t(T_WEBSITE_TITLE)}</h1>

                <h2>{t(T_WEBSITE_SUBTITLE)}</h2>

                <section className={APP_CLASS_NAME + "-header-button-container"}>

                    <Button className={APP_CLASS_NAME + "-header-button"}>{t(T_WEBSITE_GET_STARTED_BUTTON_LABEL)}</Button>

                </section>

            </header>

            <section className={APP_CLASS_NAME + "-content"}>

                <section className={APP_CLASS_NAME + "-content-row"}>


                    <article>

                        <h3>Full Stack</h3>

                        <p>Our modules make it easy to write solutions all the way from the frontend to the backend.</p>

                        <p>Design enterprise ready REST APIs, write client libraries which work on all sides of the stack,
                           and build frontends using most popular library for user interfaces -- ReactJS.</p>

                        <p>All with the same robust programming language, TypeScript.</p>

                    </article>

                    <article>

                        <h3>Backend Development</h3>

                        <p>Our TypeScript backend code is designed with the same familiar design as Java's Spring Boot.</p>

                        <p>You can use annotations to add HTTP functionality into your backend code,
                           easily document your APIs with OpenAPI, and define entity classes with PostgreSQL and MySQL
                           database support.</p>

                    </article>

                    <article>

                        <h3>Frontend Development</h3>

                        <p>We provide ready to use services, components and hooks for building user interfaces with TypeScript and ReactJS.</p>

                        <p>ReactJS is currently the most popular solution to write web based user interfaces.</p>

                    </article>

                    <article>

                        <h3>Standalone</h3>

                        <p>Our code requires minimal dependencies and most of those are only required compile time.</p>

                        <p>Backend is transpiled as a single standalone JavaScript file with only dependency for
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

                        <h3>Git Modules</h3>

                        <p>We use Git Modules instead of NPM for our own modules.</p>

                        <p>Git enables full advance of compile time transpiling and three shaking to
                           build the end result for different use cases.</p>

                        <p>You can use feature flags which will affect the end result by removing and adding
                        complete code blocks. We use it to remove debug log lines from our production builds.</p>

                    </article>

                    <article>

                        <h3>Commercial Support</h3>

                        <p>Our team is ready to support
                        any commercial need you may have for software development using our modules.</p>

                        <p>We can provide technical support -- or build complete solutions
                           as a service.</p>

                    </article>

                </section>

            </section>

        </div>
    );
}
