import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagfilter'
})
export class TagPipe implements PipeTransform {
  transform(imageTagConfig: imtagconfig[], tagFilter: string[]) {
    if (!imageTagConfig || !tagFilter) {
      console.log('pipe param missing')
      return imageTagConfig;
    }

    //la imagen tiene el tag solicitado
    const filter: imtagconfig[] = imageTagConfig.filter(item =>
      tagFilter.includes(item.tagId));
    //no admite imágenes duplicadas
    const unique: imtagconfig[] = Array.from(imageTagConfig.reduce((m, t) => m.set(t.imageId, t), new Map()).values());

     return unique && filter;

  }
}

export interface imtagconfig {
  imageId: string,
  tagId: string
}
