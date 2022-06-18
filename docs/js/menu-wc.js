'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">auth-api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-eb131f7cd589f819e85b805316e461106e76dd8f15c9455a236731bfd3b26aa1d37d0e32e7ad3dd137cd8795236f1257b08927bbaf7112ea1807182a11d4eec1"' : 'data-target="#xs-controllers-links-module-AppModule-eb131f7cd589f819e85b805316e461106e76dd8f15c9455a236731bfd3b26aa1d37d0e32e7ad3dd137cd8795236f1257b08927bbaf7112ea1807182a11d4eec1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-eb131f7cd589f819e85b805316e461106e76dd8f15c9455a236731bfd3b26aa1d37d0e32e7ad3dd137cd8795236f1257b08927bbaf7112ea1807182a11d4eec1"' :
                                            'id="xs-controllers-links-module-AppModule-eb131f7cd589f819e85b805316e461106e76dd8f15c9455a236731bfd3b26aa1d37d0e32e7ad3dd137cd8795236f1257b08927bbaf7112ea1807182a11d4eec1"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-eb131f7cd589f819e85b805316e461106e76dd8f15c9455a236731bfd3b26aa1d37d0e32e7ad3dd137cd8795236f1257b08927bbaf7112ea1807182a11d4eec1"' : 'data-target="#xs-injectables-links-module-AppModule-eb131f7cd589f819e85b805316e461106e76dd8f15c9455a236731bfd3b26aa1d37d0e32e7ad3dd137cd8795236f1257b08927bbaf7112ea1807182a11d4eec1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-eb131f7cd589f819e85b805316e461106e76dd8f15c9455a236731bfd3b26aa1d37d0e32e7ad3dd137cd8795236f1257b08927bbaf7112ea1807182a11d4eec1"' :
                                        'id="xs-injectables-links-module-AppModule-eb131f7cd589f819e85b805316e461106e76dd8f15c9455a236731bfd3b26aa1d37d0e32e7ad3dd137cd8795236f1257b08927bbaf7112ea1807182a11d4eec1"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-ab9f36436e9aa5e87ad6cf1371b908ddcb193a72c8fb7d1158a6e373195b010bee666588aff22f5b5cbbde0ce78c93e768ef00469b96499e49967405aca0f66c"' : 'data-target="#xs-controllers-links-module-AuthModule-ab9f36436e9aa5e87ad6cf1371b908ddcb193a72c8fb7d1158a6e373195b010bee666588aff22f5b5cbbde0ce78c93e768ef00469b96499e49967405aca0f66c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-ab9f36436e9aa5e87ad6cf1371b908ddcb193a72c8fb7d1158a6e373195b010bee666588aff22f5b5cbbde0ce78c93e768ef00469b96499e49967405aca0f66c"' :
                                            'id="xs-controllers-links-module-AuthModule-ab9f36436e9aa5e87ad6cf1371b908ddcb193a72c8fb7d1158a6e373195b010bee666588aff22f5b5cbbde0ce78c93e768ef00469b96499e49967405aca0f66c"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-ab9f36436e9aa5e87ad6cf1371b908ddcb193a72c8fb7d1158a6e373195b010bee666588aff22f5b5cbbde0ce78c93e768ef00469b96499e49967405aca0f66c"' : 'data-target="#xs-injectables-links-module-AuthModule-ab9f36436e9aa5e87ad6cf1371b908ddcb193a72c8fb7d1158a6e373195b010bee666588aff22f5b5cbbde0ce78c93e768ef00469b96499e49967405aca0f66c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-ab9f36436e9aa5e87ad6cf1371b908ddcb193a72c8fb7d1158a6e373195b010bee666588aff22f5b5cbbde0ce78c93e768ef00469b96499e49967405aca0f66c"' :
                                        'id="xs-injectables-links-module-AuthModule-ab9f36436e9aa5e87ad6cf1371b908ddcb193a72c8fb7d1158a6e373195b010bee666588aff22f5b5cbbde0ce78c93e768ef00469b96499e49967405aca0f66c"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CaslModule.html" data-type="entity-link" >CaslModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CaslModule-56e8516879dc150f99c69d102db7feb64ecb0ecf625134b7f512b7e3861b358b7006bce90b3498f438336df83091680e78fd7cea4cc8eb8dd89cbd575c467aa8"' : 'data-target="#xs-injectables-links-module-CaslModule-56e8516879dc150f99c69d102db7feb64ecb0ecf625134b7f512b7e3861b358b7006bce90b3498f438336df83091680e78fd7cea4cc8eb8dd89cbd575c467aa8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CaslModule-56e8516879dc150f99c69d102db7feb64ecb0ecf625134b7f512b7e3861b358b7006bce90b3498f438336df83091680e78fd7cea4cc8eb8dd89cbd575c467aa8"' :
                                        'id="xs-injectables-links-module-CaslModule-56e8516879dc150f99c69d102db7feb64ecb0ecf625134b7f512b7e3861b358b7006bce90b3498f438336df83091680e78fd7cea4cc8eb8dd89cbd575c467aa8"' }>
                                        <li class="link">
                                            <a href="injectables/CaslAbilityFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaslAbilityFactory</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SessionModule.html" data-type="entity-link" >SessionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SessionModule-ae1b3589f89a3cc6533854a0d1bb873f6c673b2c375d137886bd739638a67cb5ad41d07ad65eeb3c4552f543483eb0a761fe94e0adf552df6c7231942e3b9050"' : 'data-target="#xs-controllers-links-module-SessionModule-ae1b3589f89a3cc6533854a0d1bb873f6c673b2c375d137886bd739638a67cb5ad41d07ad65eeb3c4552f543483eb0a761fe94e0adf552df6c7231942e3b9050"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SessionModule-ae1b3589f89a3cc6533854a0d1bb873f6c673b2c375d137886bd739638a67cb5ad41d07ad65eeb3c4552f543483eb0a761fe94e0adf552df6c7231942e3b9050"' :
                                            'id="xs-controllers-links-module-SessionModule-ae1b3589f89a3cc6533854a0d1bb873f6c673b2c375d137886bd739638a67cb5ad41d07ad65eeb3c4552f543483eb0a761fe94e0adf552df6c7231942e3b9050"' }>
                                            <li class="link">
                                                <a href="controllers/SessionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SessionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SessionModule-ae1b3589f89a3cc6533854a0d1bb873f6c673b2c375d137886bd739638a67cb5ad41d07ad65eeb3c4552f543483eb0a761fe94e0adf552df6c7231942e3b9050"' : 'data-target="#xs-injectables-links-module-SessionModule-ae1b3589f89a3cc6533854a0d1bb873f6c673b2c375d137886bd739638a67cb5ad41d07ad65eeb3c4552f543483eb0a761fe94e0adf552df6c7231942e3b9050"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SessionModule-ae1b3589f89a3cc6533854a0d1bb873f6c673b2c375d137886bd739638a67cb5ad41d07ad65eeb3c4552f543483eb0a761fe94e0adf552df6c7231942e3b9050"' :
                                        'id="xs-injectables-links-module-SessionModule-ae1b3589f89a3cc6533854a0d1bb873f6c673b2c375d137886bd739638a67cb5ad41d07ad65eeb3c4552f543483eb0a761fe94e0adf552df6c7231942e3b9050"' }>
                                        <li class="link">
                                            <a href="injectables/SessionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SessionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-93272daa83049c645437de6ff1df4b358edb13891b47e3feb0e6c489c44bef8824de79a4f455acf18ce09cd02d12b45b66bb6d1cbfee8344f1e2ab375a1bca82"' : 'data-target="#xs-controllers-links-module-UsersModule-93272daa83049c645437de6ff1df4b358edb13891b47e3feb0e6c489c44bef8824de79a4f455acf18ce09cd02d12b45b66bb6d1cbfee8344f1e2ab375a1bca82"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-93272daa83049c645437de6ff1df4b358edb13891b47e3feb0e6c489c44bef8824de79a4f455acf18ce09cd02d12b45b66bb6d1cbfee8344f1e2ab375a1bca82"' :
                                            'id="xs-controllers-links-module-UsersModule-93272daa83049c645437de6ff1df4b358edb13891b47e3feb0e6c489c44bef8824de79a4f455acf18ce09cd02d12b45b66bb6d1cbfee8344f1e2ab375a1bca82"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-93272daa83049c645437de6ff1df4b358edb13891b47e3feb0e6c489c44bef8824de79a4f455acf18ce09cd02d12b45b66bb6d1cbfee8344f1e2ab375a1bca82"' : 'data-target="#xs-injectables-links-module-UsersModule-93272daa83049c645437de6ff1df4b358edb13891b47e3feb0e6c489c44bef8824de79a4f455acf18ce09cd02d12b45b66bb6d1cbfee8344f1e2ab375a1bca82"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-93272daa83049c645437de6ff1df4b358edb13891b47e3feb0e6c489c44bef8824de79a4f455acf18ce09cd02d12b45b66bb6d1cbfee8344f1e2ab375a1bca82"' :
                                        'id="xs-injectables-links-module-UsersModule-93272daa83049c645437de6ff1df4b358edb13891b47e3feb0e6c489c44bef8824de79a4f455acf18ce09cd02d12b45b66bb6d1cbfee8344f1e2ab375a1bca82"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Authorization.html" data-type="entity-link" >Authorization</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseError.html" data-type="entity-link" >BaseError</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MethodNotImplementedError.html" data-type="entity-link" >MethodNotImplementedError</a>
                            </li>
                            <li class="link">
                                <a href="classes/NotFoundError.html" data-type="entity-link" >NotFoundError</a>
                            </li>
                            <li class="link">
                                <a href="classes/Session.html" data-type="entity-link" >Session</a>
                            </li>
                            <li class="link">
                                <a href="classes/UnauthenticatedError.html" data-type="entity-link" >UnauthenticatedError</a>
                            </li>
                            <li class="link">
                                <a href="classes/UnauthorizedError.html" data-type="entity-link" >UnauthorizedError</a>
                            </li>
                            <li class="link">
                                <a href="classes/UnexpectedError.html" data-type="entity-link" >UnexpectedError</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsersDto.html" data-type="entity-link" >UsersDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidationError.html" data-type="entity-link" >ValidationError</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IConfig.html" data-type="entity-link" >IConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JWTPayload.html" data-type="entity-link" >JWTPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SessionPayload.html" data-type="entity-link" >SessionPayload</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});