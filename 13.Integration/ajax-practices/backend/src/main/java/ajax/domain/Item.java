package ajax.domain;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor //not null 3개를 파라미터로 가
@EqualsAndHashCode(exclude = {"type", "name", "image"})
public class Item {
	@NonNull
	private Long id;

	@NonNull
	private String type;

	@NonNull
	private String name;

	private String image;
	
	public Item(Long id) {
		this.id=id;
	}

}