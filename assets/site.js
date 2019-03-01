
Vue.component('skillbox', {

    props: ['logo', 'alt', 'ext'],

    template: `
        <div style="padding: 1em;">
                                    <div class="card">
                                        <div class="card-content">
                                            <div class="content">
                                                <img style="height: 2em;" :src="'/assets/images/' + logo" :alt="alt">
                                                
                                                <slot></slot>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    `

});

Vue.component('portfoliobox', {

    props: ['catchline', 'image', 'url'],
    template: `
        <div style="padding: 1em;">
                                    <div class="card">
                                                                   <header class="card-header">
                                    <p class="card-header-title">
                                        <span><i class="em em-fire"></i> {{catchline}}</span>
                                    </p>
                                </header>
                                        <div class="card-content">
                                            <div class="content">
                                                <figure class="image">
                                                <img :src="'/assets/images/' + image" >
</figure>
                                            </div>
                                        </div>
                                                                        <footer class="card-footer">
                                    <a target="_blank" :href="url" class="card-footer-item"><i class="em em-eye"></i>&nbsp;&nbsp; Neem een kijkje</a>
                                </footer>
                                    </div>
                                </div>
    `,
    templatesssds: `

                <div style="padding: 1em;">
                                    <div class="card">
                                                                    <header class="card-header">
                                    <p class="card-header-title">
                                        <span><i class="em em-fire"></i> {{catchline}}</span>
                                    </p>
                                </header>
                                        <div class="card-content">
                                            <div class="content">

                                            </div>
                                        </div>
                                                               
                                    </div>
                                </div>
                               

    `

});

new Vue({

    el: '#root',

    data: {
        hireMeIsActive: false,
        jaar: new Date().getFullYear(),
    }

});

AOS.init();
