var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'top-bottom',
    scrollDebounceThreshold: 300,
    stateTransitionSpeed: 1000,
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ff9966', '#ff5e62'],
                ['#00F260', '#0575E6'],
                ['#e1eec3', '#f05053']
            ]
        }
    }
});
