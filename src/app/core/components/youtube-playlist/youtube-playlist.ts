import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { NgClass } from '@angular/common';
import { YoutubeMediaResource } from '../../interfaces/youtube.media.resource.d';

@Component({
	selector: 'youtube-playlist',
	template: require('./youtube-playlist.html'),
	styles: [ `
		@media (min-width: 768px) {
			.youtube-item {
			    width: 25%;
			}
		}
	` ],
	directives: [ NgClass ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class YoutubePlaylist {
	@Input() media: any;
	@Output() play = new EventEmitter();
	@Output() queue = new EventEmitter();

	isPlaying = false;

	constructor () {

	}

	ngOnInit(){
		
	}

    playPlaylist (media: GoogleApiYouTubePlaylistResource) {
    	this.play.next(media);
	}

	queuePlaylist(media: GoogleApiYouTubePlaylistResource) {
		this.queue.next(media);
	}
}
