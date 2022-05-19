export interface Feed {
    class: string,
    icon: string,
    task: string,
    time: string
}

export const Feeds: Feed[] = [

    {
        class: 'bg-info',
        icon: 'bi bi-bag-check',
        task: 'Small Carpentry Job.',
        time: 'Just Now'
    },
    {
        class: 'bg-success',
        icon: 'bi bi-bag-check',
        task: 'Med Electricity Job.',
        time: '2 Hours ago'
    },
    {
        class: 'bg-warning',
        icon: 'bi bi-bag-check',
        task: 'Small Plumbing Job.',
        time: '8 Hours ago'
    },
    {
        class: 'bg-danger',
        icon: 'bi bi-bag-check',
        task: 'Small Plumbing Job.',
        time: '12 Hours ago'
    },
    {
        class: 'bg-primary',
        icon: 'bi bi-bag-check',
        task: 'Med Electricity Job',
        time: '1 Day ago'
    },

]
