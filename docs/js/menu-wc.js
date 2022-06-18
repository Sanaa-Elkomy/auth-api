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
                                            'data-target="#controllers-links-module-AuthModule-cbeeeb484bc62dddffde06e96dd251511cc90ceb594684bfbd1c2758adb38f0674762dc9a6cfcbe192e0333ca1995551718bfea8f8693b39da74c4731d4825bc"' : 'data-target="#xs-controllers-links-module-AuthModule-cbeeeb484bc62dddffde06e96dd251511cc90ceb594684bfbd1c2758adb38f0674762dc9a6cfcbe192e0333ca1995551718bfea8f8693b39da74c4731d4825bc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-cbeeeb484bc62dddffde06e96dd251511cc90ceb594684bfbd1c2758adb38f0674762dc9a6cfcbe192e0333ca1995551718bfea8f8693b39da74c4731d4825bc"' :
                                            'id="xs-controllers-links-module-AuthModule-cbeeeb484bc62dddffde06e96dd251511cc90ceb594684bfbd1c2758adb38f0674762dc9a6cfcbe192e0333ca1995551718bfea8f8693b39da74c4731d4825bc"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-cbeeeb484bc62dddffde06e96dd251511cc90ceb594684bfbd1c2758adb38f0674762dc9a6cfcbe192e0333ca1995551718bfea8f8693b39da74c4731d4825bc"' : 'data-target="#xs-injectables-links-module-AuthModule-cbeeeb484bc62dddffde06e96dd251511cc90ceb594684bfbd1c2758adb38f0674762dc9a6cfcbe192e0333ca1995551718bfea8f8693b39da74c4731d4825bc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-cbeeeb484bc62dddffde06e96dd251511cc90ceb594684bfbd1c2758adb38f0674762dc9a6cfcbe192e0333ca1995551718bfea8f8693b39da74c4731d4825bc"' :
                                        'id="xs-injectables-links-module-AuthModule-cbeeeb484bc62dddffde06e96dd251511cc90ceb594684bfbd1c2758adb38f0674762dc9a6cfcbe192e0333ca1995551718bfea8f8693b39da74c4731d4825bc"' }>
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
                                            'data-target="#controllers-links-module-SessionModule-7987a945a805f4c6f13a1c547183d865e8ff7f6391a5e05a5f3cc033e1fb6c7f100536033e411e317f3b9ef48c4a6bbb899ecc537eb78dc8a0d7c3d6572a19d7"' : 'data-target="#xs-controllers-links-module-SessionModule-7987a945a805f4c6f13a1c547183d865e8ff7f6391a5e05a5f3cc033e1fb6c7f100536033e411e317f3b9ef48c4a6bbb899ecc537eb78dc8a0d7c3d6572a19d7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SessionModule-7987a945a805f4c6f13a1c547183d865e8ff7f6391a5e05a5f3cc033e1fb6c7f100536033e411e317f3b9ef48c4a6bbb899ecc537eb78dc8a0d7c3d6572a19d7"' :
                                            'id="xs-controllers-links-module-SessionModule-7987a945a805f4c6f13a1c547183d865e8ff7f6391a5e05a5f3cc033e1fb6c7f100536033e411e317f3b9ef48c4a6bbb899ecc537eb78dc8a0d7c3d6572a19d7"' }>
                                            <li class="link">
                                                <a href="controllers/SessionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SessionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SessionModule-7987a945a805f4c6f13a1c547183d865e8ff7f6391a5e05a5f3cc033e1fb6c7f100536033e411e317f3b9ef48c4a6bbb899ecc537eb78dc8a0d7c3d6572a19d7"' : 'data-target="#xs-injectables-links-module-SessionModule-7987a945a805f4c6f13a1c547183d865e8ff7f6391a5e05a5f3cc033e1fb6c7f100536033e411e317f3b9ef48c4a6bbb899ecc537eb78dc8a0d7c3d6572a19d7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SessionModule-7987a945a805f4c6f13a1c547183d865e8ff7f6391a5e05a5f3cc033e1fb6c7f100536033e411e317f3b9ef48c4a6bbb899ecc537eb78dc8a0d7c3d6572a19d7"' :
                                        'id="xs-injectables-links-module-SessionModule-7987a945a805f4c6f13a1c547183d865e8ff7f6391a5e05a5f3cc033e1fb6c7f100536033e411e317f3b9ef48c4a6bbb899ecc537eb78dc8a0d7c3d6572a19d7"' }>
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
                                            'data-target="#controllers-links-module-UsersModule-9c7597683c29a299f52d09b0fcfbcc1a55b31a837ed013733ed53d6df44772f8e9b66227ef70a684481796deb27777de89bb26e240aa1ca15e6e47339aed547e"' : 'data-target="#xs-controllers-links-module-UsersModule-9c7597683c29a299f52d09b0fcfbcc1a55b31a837ed013733ed53d6df44772f8e9b66227ef70a684481796deb27777de89bb26e240aa1ca15e6e47339aed547e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-9c7597683c29a299f52d09b0fcfbcc1a55b31a837ed013733ed53d6df44772f8e9b66227ef70a684481796deb27777de89bb26e240aa1ca15e6e47339aed547e"' :
                                            'id="xs-controllers-links-module-UsersModule-9c7597683c29a299f52d09b0fcfbcc1a55b31a837ed013733ed53d6df44772f8e9b66227ef70a684481796deb27777de89bb26e240aa1ca15e6e47339aed547e"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-9c7597683c29a299f52d09b0fcfbcc1a55b31a837ed013733ed53d6df44772f8e9b66227ef70a684481796deb27777de89bb26e240aa1ca15e6e47339aed547e"' : 'data-target="#xs-injectables-links-module-UsersModule-9c7597683c29a299f52d09b0fcfbcc1a55b31a837ed013733ed53d6df44772f8e9b66227ef70a684481796deb27777de89bb26e240aa1ca15e6e47339aed547e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-9c7597683c29a299f52d09b0fcfbcc1a55b31a837ed013733ed53d6df44772f8e9b66227ef70a684481796deb27777de89bb26e240aa1ca15e6e47339aed547e"' :
                                        'id="xs-injectables-links-module-UsersModule-9c7597683c29a299f52d09b0fcfbcc1a55b31a837ed013733ed53d6df44772f8e9b66227ef70a684481796deb27777de89bb26e240aa1ca15e6e47339aed547e"' }>
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